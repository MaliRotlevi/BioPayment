import React, { useState, Component } from "react";
import { logUser } from "../store/action/user";
import { connect } from "react-redux";

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
      <h3></h3>
      <h1>התחברות</h1>
      <input type="text" name="userName" value={props.currentUser.name} onKeyDown={updateUserName} ref={inputRefUserName} />
      <input type="password" name="userPassword" onKeyDown={updatePassword} ref={inputRefPassword} />
      <input type="text" name="fingerPrint" ref={inputRefFingerPrint} />
      <button onClick={() => {
        console.log(props.currentUser);

      // log();
      }}>submit
      </button>
    </form>

  </>)

}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}
// , { logUser }
export default connect(mapStateToProps)(Login);
