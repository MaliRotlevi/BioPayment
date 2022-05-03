import React, { useState, Component, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { updetaUser } from '../store/action/user'
import './Details.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ComboBox, Item, Section } from '@adobe/react-spectrum'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';





const Edit = (props) => {
  const [firstName, setFirstName] = useState(props.currentUser.firstName);
  const [lastName, setLastName] = useState(props.currentUser.lastName);
  const [profileCode, setProfileCode] = useState(props.currentUser.profileCode);
  const [password, setPassword] = useState(props.currentUser.password);
  const [userName, setUserName] = useState(props.currentUser.userName);
  const [email, setEmail] = useState(props.currentUser.email);

  const inputRefFirstName = React.createRef()
  const inputRefLastName = React.createRef()
  const inputRefEmail = React.createRef()
  const inputRefPassword = React.createRef()
  const inputRefUserName = React.createRef()
  const inputRefProfileCode = React.createRef()


  // let [majorId, setMajorId] = React.useState();





  const updateFirstName = () => {
    const inputTextFirstName = inputRefFirstName.current.value
    setFirstName(inputTextFirstName);
  }
  const updateLastName = () => {
    const inputTextLastName = inputRefLastName.current.value
    // setLastName(inputTextLastName);
    setLastName(inputTextLastName);
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
  const updateProfileCode = (code) => {
    const inputTextProfileCode = code
    setProfileCode(inputTextProfileCode);
  }

  return (
    <>
      <h1>Edit Details</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>first Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.firstName} ref={inputRefFirstName} onKeyUp={updateFirstName} pattern="[^\s]+" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>last Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.lastName} ref={inputRefLastName} onKeyUp={updateLastName} pattern="[^\s]+" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control defaultValue={props.currentUser.email} ref={inputRefEmail} onKeyUp={updateEmail} pattern="[^\s]+" />
          </Form.Group>
        </Row>
        <Row className="mb-3">


          <Form.Group as={Col} controlId="formGridUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.userName} ref={inputRefUserName} onKeyUp={updateUserName} pattern="[^\s]+" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control defaultValue={props.currentUser.password} ref={inputRefPassword} onKeyUp={updatePassword} pattern="[^\s]+" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridProfile">
            <FormControl>
              <Form.Label>Profiles:</Form.Label>
              <label>{props.currentProfile.profileName}</label>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel value="student" control={<Radio />} label="student" onChange={() => { updateProfileCode(1) }} />
                <FormControlLabel value="young" control={<Radio />} label="young" onChange={() => { updateProfileCode(2) }} />
                <br />
                <FormControlLabel value="adult" control={<Radio />} label="adult" onChange={() => { updateProfileCode(3) }} />
                <FormControlLabel value="elderly" control={<Radio />} label="elderly" onChange={() => { updateProfileCode(4) }} />
              </RadioGroup>
              <input type="file" accept="*.pdf" style={{ display: 'none' }} id="contained-button-file" />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload File
                </Button>
              </label>
            </FormControl>
          </Form.Group>





        </Row>
        <Button color="primary" variant="contained" id="btnRegist"
          onClick={() => { props.updetaUser({ id: props.currentUser.id, firstName, lastName, birthDate: props.currentUser.birthDate, userName, password, fingerPrint: props.currentUser.fingerPrint, profileCode, isDriver: props.currentUser.isDriver, email }) }}>
          Save Changes
        </Button>


      </Form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentProfile: state.profile.currentProfile,
    profilesList: state.profile.profiles
  }
}
export default connect(mapStateToProps, { updetaUser })(Edit);

