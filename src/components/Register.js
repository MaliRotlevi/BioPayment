import React, { useState, Component } from "react";
//import { Form } from "react-bootstrap";
//import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
const Register = (props) => {

    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isDriver, setIsDriver] = useState('');
    const [fingerPrint, setFingerPrint] = useState('');
    const [validated, setValidated] = useState(false);

    const inputRefUserId = React.createRef()
    const inputRefFirstName = React.createRef()
    const inputRefLastName = React.createRef()
    const inputRefBirthDate = React.createRef()
    const inputRefMail = React.createRef()
    const inputRefPassword = React.createRef()
    const inputRefUserName = React.createRef()
    const inputRefIsDriver = React.createRef()
    const inputRefFingerPrint = React.createRef()



    const updateInputs = () => {
        const inputTextUserId = inputRefUserId.current.value
        setUserId(inputTextUserId);
        const inputTextFirstName = inputRefFirstName.current.value
        setFirstName(inputTextFirstName);
        const inputTextLastName = inputRefLastName.current.value
        setLastName(inputTextLastName);
        const inputTextBirthDate = inputRefBirthDate.current.value
        setBirthDate(inputTextBirthDate);

        const inputTextMail = inputRefMail.current.value
        setMail(inputTextMail);

        const inputTextPassword = inputRefPassword.current.value
        setPassword(inputTextPassword);
        const inputTextUserName = inputRefUserName.current.value
        setUserName(inputTextUserName);
        const inputTextIsDriver = inputRefIsDriver.current.value
        setIsDriver(inputTextIsDriver);
        const inputTextFingerPrint = inputRefFingerPrint.current.value
        setFingerPrint(inputTextFingerPrint);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (<>
        <form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1>Regist:</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control type="text" name="userId" required placeholder="enter id..." ref={inputRefUserId} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="firstName" required placeholder="enter first name..." ref={inputRefFirstName} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="lastName"  placeholder="enter last name..." className="name-input" ref={inputRefLastName} required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="birthDare" placeholder="enter birth date..." ref={inputRefBirthDate} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="mail" placeholder="enter email..." ref={inputRefMail} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="password" name="password" placeholder="enter password..." ref={inputRefPassword} placeholder="Password" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="userName" placeholder="enter user name..." ref={inputRefUserName} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <input type="checkbox" name="isDriver" ref={inputRefIsDriver} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Control type="text" name="fingerPrint" ref={inputRefFingerPrint} />
                </Form.Group>

            </Row>
            <Form.Control type="submit" onClick={updateInputs} />
        </form>

    </>)
}
export default Register;