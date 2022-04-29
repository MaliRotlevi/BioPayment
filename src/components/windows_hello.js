import React from "react";

const Windows_hello = (props) => {
    const credAlgorithm = "RSASSA-PKCS1-v1_5";

    function loaded() {
        document.getElementById('credID').value = localStorage["id"] ? localStorage["id"] : "";
        document.getElementById('publicKey').value = localStorage["publickey"] ? localStorage["publickey"] : "";
    }

    function make() {

        const publicKeyCredentialCreationOptions = {
            challenge: Uint8Array.from(
                "randomStringFromServer", c => c.charCodeAt(0)),
            rp: {
                name: "Google",
                id: "localhost",
            },
            user: {
                id: Uint8Array.from(
                    "UZSL85T9AFC", c => c.charCodeAt(0)),
                name: "mali.rotlevi@gmail.com",
                displayName: "mali.rotlevi",
            },
            pubKeyCredParams: [{alg: -7, type: "public-key"}],
            authenticatorSelection: {
                authenticatorAttachment: "platform",
                userVerification: "discouraged",
                requireResidentKey: false
            },
            timeout: 60000,
            attestation: "none"
        };
        
        // Note: The following call will cause the authenticator to display UI.
        navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
        }).then(function (result) {
            var id = result.credential.id;
            var publicKey = result.publicKey;

            localStorage["id"] = document.getElementById('credID').value = id;
            localStorage["publickey"] = document.getElementById('publicKey').value = JSON.stringify(publicKey);
        }).catch(function (err) {
            // No acceptable authenticator or user refused consent. Handle appropriately.
            alert(err);
        });
    }
    

    function parseBase64(s) {
        s = s.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, '');
        return new Uint8Array(Array.prototype.map.call(atob(s), function (c) { return c.charCodeAt(0) }));
    }

    function concatUint8Array(a1, a2) {
        var d = new Uint8Array(a1.length + a2.length);
        d.set(a1);
        d.set(a2, a1.length);
        return d;
    }

    function verify() {
        var id;
        const challenge = "challenge-string"; // this would normally come from the server 
        navigator.authentication.getAssertion(challenge).then(function (assertion) {
            id = assertion.credential.id;
            return verifyMSFidoSignature(assertion.clientData, assertion.authenticatorData,
                assertion.signature, document.getElementById('publicKey').value);
        })
            .then(function (result) {
                alert("ID=" + id + "\r\n" + result);
            })
            .catch(function (err) {
                alert(err);
            });
    }

    function verifyWithID() {
        var id = document.getElementById('credID').value;
        const challenge = "challenge-string"; // this would normally come from the server 
        var allowList = [{ type: "ScopedCred", id: id }];
        navigator.authentication.getAssertion(challenge, { allowList }).then(function (assertion) {
            id = assertion.credential.id;
            return verifyMSFidoSignature(assertion.clientData, assertion.authenticatorData,
                assertion.signature, document.getElementById('publicKey').value);
        })
            .then(function (result) {
                alert("ID=" + id + "\r\n" + result);
            })
            .catch(function (err) {
                alert(err);
            });
    }

    function verifyMSFidoSignature(clientData, authenticatorData, signature, publicKey) {
        var hash;
        // the server would have to validate that the clientData contained the same challenge
        // that was generated on the server for the getAssertion call
        return crypto.subtle.digest("SHA-256", parseBase64(clientData))
            .then(function (h) {
                hash = new Uint8Array(h);
                return crypto.subtle.importKey("jwk", JSON.parse(publicKey), credAlgorithm, false, ["verify"]);
            })
            .then(function (key) {
                return crypto.subtle.verify({ name: credAlgorithm, hash: { name: "SHA-256" } },
                    key, parseBase64(signature), concatUint8Array(parseBase64(authenticatorData), hash));
            });
    }
    
    return (
        <>
            <button onClick={make}>Make</button>
            <button onClick={verify}>Verify</button>
            <button onClick={verifyWithID}>Verify with ID</button>
            <div onLoad={loaded}>
                <input type="text" size="80" id="credID" />
                <br />
                <input type="text" size="120" id="publicKey" />
            </div>
        </>
    )
}
export default Windows_hello;