import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postUser } from '../store/action/user'
import './Login.css';
import { Button } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const Register = (props) => {

    const [id, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [profile, setProfile] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isDriver, setIsDriver] = useState('');
    const [fingerPrint, setFingerPrint] = useState('');
    const [email, setEmail] = useState('');


    const inputRefUserId = React.createRef()
    const inputRefFirstName = React.createRef()
    const inputRefLastName = React.createRef()
    const inputRefBirthDate = React.createRef()
    const inputRefEmail = React.createRef()
    const inputRefPassword = React.createRef()
    const inputRefUserName = React.createRef()
    const inputRefIsDriver = React.createRef()
    const inputRefFingerPrint = React.createRef()



    const updateId = () => {
        const inputTextUserId = inputRefUserId.current.value
        setUserId(inputTextUserId);
        setProfile(0);
    }
    const updateFirstName = () => {
        const inputTextFirstName = inputRefFirstName.current.value
        setFirstName(inputTextFirstName);
    }
    const updateLastName = () => {
        const inputTextLastName = inputRefLastName.current.value
        setLastName(inputTextLastName);
    }
    const updateBirthDate = () => {
        const inputTextBirthDate = inputRefBirthDate.current.value
        setBirthDate(inputTextBirthDate);
    }
    const updateEmail = () => {
        const inputTextEmail = inputRefEmail.current.value
        setEmail(inputTextEmail);
    }
    const updatePassword = () => {
        const inputTextPassword = inputRefPassword.current.value
        setPassword(inputTextPassword);
    }
    const updateUserName = () => {
        const inputTextUserName = inputRefUserName.current.value
        setUserName(inputTextUserName);
    }
    const updateIsDriver = () => {
        const inputTextIsDriver = inputRefIsDriver.current.value
        setIsDriver(inputTextIsDriver);
    }
    const updateFingerPrint = () => {
        const inputTextFingerPrint = inputRefFingerPrint.current.value
        setFingerPrint(inputTextFingerPrint);
    }
    return (<>
        <form >
            <h1>Regist:</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="4"  >
                    <label>id</label>
                    <Form.Control type="text" id="inp" name="userId" required placeholder="enter id..." ref={inputRefUserId} onKeyUp={updateId} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4"  >
                    <label>first name</label>
                    <Form.Control type="text" id="inp" name="firstName" required placeholder="enter first name..." ref={inputRefFirstName} onKeyUp={updateFirstName} />

                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <label>last name</label>
                    <Form.Control type="text" id="inp" name="lastName" placeholder="enter last name..." className="name-input" ref={inputRefLastName} onKeyUp={updateLastName} required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <label>birth date</label>
                    <Form.Control type="text" id="inp" name="birthDate" placeholder="enter birth date..." onKeyUp={updateBirthDate} ref={inputRefBirthDate} />
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <label>email</label>
                    <Form.Control type="text" id="inp" name="email" placeholder="enter email..." ref={inputRefEmail} onKeyUp={updateEmail} />
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <label>password</label>
                    <Form.Control type="password" id="inp" name="password" placeholder="enter password..." ref={inputRefPassword} onKeyUp={updatePassword} />
                </Form.Group><Form.Group as={Col} md="4" >
                    <label>user name</label>
                    <Form.Control type="text" id="inp"  name="userName" placeholder="enter user name..." ref={inputRefUserName} onKeyUp={updateUserName} />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <label>finger print</label>
                    <Form.Control type="text" id="inp" name="fingerPrint" placeholder="enter fingerPrint..." ref={inputRefFingerPrint} onKeyUp={updateFingerPrint} />
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <label>driver</label>
                    <h1></h1>
                    <FormControlLabel id="inp" control={<Checkbox />} label="" name="isDriver" ref={inputRefIsDriver} onKeyUp={updateIsDriver} />
                    {/* <input type="checkbox" name="isDriver" ref={inputRefIsDriver} onKeyUp={updateIsDriver} /> */}
                </Form.Group>
            </Row>
            <Button color="primary" variant="contained" id="btnRegist"
                onClick={() => {
                    console.log(props.currentUser);
                    debugger
                    props.postUser({ id, firstName, lastName, birthDate, userName, password, fingerPrint, profile, isDriver,email})
                }} >
                Regist
            </Button>
        </form>

    </>)
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, { postUser })(Register);
