import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser } from "../store/action/user";
const Register = (props) => {

    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [profile, setProfile] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isDriver, setIsDriver] = useState('');
    const [fingerPrint, setFingerPrint] = useState('');


    const inputRefUserId = React.createRef()
    const inputRefFirstName = React.createRef()
    const inputRefLastName = React.createRef()
    const inputRefBirthDate = React.createRef()
    const inputRefMail = React.createRef()
    const inputRefPassword = React.createRef()
    const inputRefUserName = React.createRef()
    const inputRefIsDriver = React.createRef()
    const inputRefFingerPrint = React.createRef()



    const updateId = () => {
        const inputTextUserId = inputRefUserId.current.value
        setUserId(inputTextUserId);
        setProfile(0);
    }
    const updateFirstName=()=>{
        const inputTextFirstName = inputRefFirstName.current.value
        setFirstName(inputTextFirstName);
    }
    const updateLastName=()=>{
        const inputTextLastName = inputRefLastName.current.value
        setLastName(inputTextLastName);
    }
    const updateBirthDate=()=>{ 
        const inputTextBirthDate = inputRefBirthDate.current.value
        setBirthDate(inputTextBirthDate);
    }
// const updateMail=()=>{
//         const inputTextMail = inputRefMail.current.value
//         setMail(inputTextMail);
// }
const updatePassword=()=>{
        const inputTextPassword = inputRefPassword.current.value
        setPassword(inputTextPassword);
}
const updateUserName=()=>{
        const inputTextUserName = inputRefUserName.current.value
        setUserName(inputTextUserName);
}
const updateIsDriver=()=>{
        const inputTextIsDriver = inputRefIsDriver.current.value
        setIsDriver(inputTextIsDriver);
}
const updateFingerPrint=()=>{
    const inputTextFingerPrint = inputRefFingerPrint.current.value
        setFingerPrint(inputTextFingerPrint);
}
        
   

    


    return (<>
        <form >
            <h1>Regist:</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="4"  >
                    <Form.Control type="text" name="userId" required placeholder="enter id..." ref={inputRefUserId}  onKeyUp={updateId}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4"  >
                    <Form.Control type="text" name="firstName" required placeholder="enter first name..." ref={inputRefFirstName} onKeyUp={updateFirstName} />
                    
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <Form.Control type="text" name="lastName"  placeholder="enter last name..." className="name-input" ref={inputRefLastName}onKeyUp={updateLastName}  required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <Form.Control type="text" name="birthDate" placeholder="enter birth date..." onKeyUp={updateBirthDate}  ref={inputRefBirthDate} />
                </Form.Group>
                {/* <Form.Group as={Col} md="4" >
                    <Form.Control type="text" name="mail" placeholder="enter email..." ref={inputRefMail} onKeyUp={updateMail}  />
                </Form.Group> */}
                <Form.Group as={Col} md="4" >
                    <Form.Control type="password" name="password" placeholder="enter password..." ref={inputRefPassword} placeholder="Password" onKeyUp={updatePassword}  />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <Form.Control type="text" name="userName" placeholder="enter user name..." ref={inputRefUserName} onKeyUp={updateUserName}  />
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <input type="checkbox" name="isDriver" ref={inputRefIsDriver} onKeyUp={updateIsDriver}  />
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <Form.Control type="text" name="fingerPrint" ref={inputRefFingerPrint} onKeyUp={updateFingerPrint}  />
                </Form.Group>

            </Row>
            <button onClick={props.addUser({userId,firstName,lastName,birthDate,userName,password,fingerPrint,profile,isDriver})} >Regist</button>
        </form>

    </>)
}
const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser
    }
  }

  export default connect(mapStateToProps,{addUser})(Register);
  