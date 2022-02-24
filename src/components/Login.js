import React, { useState, Component } from "react";
import { logUser } from "../store/action/user";
import { connect } from "react-redux";
import {Button} from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './Login.css';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [fingerPrint, setFingerPrint] = useState('');

  const [goodUser, setGoodUser] = useState(false);


  const inputRefUserName = React.createRef();
  const inputRefPassword = React.createRef()
  const inputRefFingerPrint = React.createRef()

  // const updateInputs = () => {
  const updateUserName = () => {
    const inputTextUserName = inputRefUserName.current.value
    setUserName(inputTextUserName);

  }
  const updatePassword = () => {
    const inputTextPassword = inputRefPassword.current.value
    setUserPassword(inputTextPassword);

  }
  //   const updateFingerPrint = () => {
  //     const inputTextFingerPrint = inputRefFingerPrint.current.value
  //     setFingerPrint(inputTextFingerPrint);
  //     console.log(inputTextFingerPrint);

  //   }

  //  }

  const log = () => {
    if (props.currentUser == null) {
      setGoodUser(false);
    }
    else
      setGoodUser(true);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

  }
  return (<>
    <form onSubmit={handleSubmit}>        
      <h1>Login</h1>
      <div className="form-group">
      <label>User Name</label>
      <input type="text" name="userName" className="form-control" placeholder="Enter user name..." onChange={updateUserName} ref={inputRefUserName} />
      </div>
      <div className="form-group">
      <label>Password</label>
      <input type="password" name="userPassword" className="form-control" placeholder="Enter password..." onChange={updatePassword} ref={inputRefPassword} />
      </div>
      <div className="form-group">
      <label>FingerPrint</label>
      <input type="text" name="fingerPrint" className="form-control" placeholder="Enter finger print..." ref={inputRefFingerPrint} defaultValue={props.currentUser.userName} />
      </div>
      <h1> </h1>
      <Button color="primary" variant="contained" onClick={() => {
        console.log(props.currentUser);
        props.logUser({userName,userPassword});
      }}>submit
      </Button>
    </form>
 
  </>)

}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps,{logUser})(Login);
