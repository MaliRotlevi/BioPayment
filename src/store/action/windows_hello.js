function makeCredential() {
    try {
      var accountInfo = {
        rpDisplayName: 'Contoso',  // Name of relying party
        displayName: 'John Doe',  // Name of user account in relying partying
        name: 'johndoe@contoso.com',// Detailed name of account
        id: 'joed',                 // Account identifier
        imageUri: imgUserProfile,  // user’s account image
      }; 
      
      var cryptoParameters = [
        {
          type: 'ScopedCred',
          algorithm: 'RSASSA-PKCS1-v1_5'
        }      
      ];
  
      var timeout = { };
      var denyList = { };
      var ext = { };
  
      var attestationChallenge = getChallengeFromServer();
  
      window.webauthn.makeCredential(
             accountInfo, 
                    cryptoParameters, 
                    attestationChallenge, 
                    timeout, 
                    denyList, 
                    ext)
        .then(function (creds) {
         // If promised succeeds, send credential information to the server
          sendToServer(creds);
        })
        .catch(function(reason) {
          // User may have cancelled the Windows Hello dialog
        });
    } catch(ex) {
       // The user may not have setup Windows Hello, show instructions
     }
  }

  var accountInfo = {
    rpDisplayName: 'Contoso',        // Name of relying party
    userDisplayName: 'John Doe'      // Name of user account in relying partying
  }; 
      
  var cryptoParameters = [
    {
      type: 'FIDO_2_0',
      algorithm: 'RSASSA-PKCS1-v1_5'
    }      
  ];
  
  window.msCredential.makeCredential(accountInfo, cryptoParameters)
    .then(function (cred) {
     // If promised succeeds, send credential information to the server
      sendToServer({
                 credential: {type: 'ScopedCred', id: cred.id},
                 algorithm: cred.algorithm,
                 publicKey: JSON.parse(cred.publicKey),
                 attestation: cred.attestation
             }
       );
    });