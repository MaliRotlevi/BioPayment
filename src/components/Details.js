import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Button, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import './Details.css';
import { getProfileName } from '../store/action/profile'
import { getcontractToUser } from '../store/action/contractToUser'
import { getcontracts } from '../store/action/contracts'



const Details = (props) => {

  
  const getcontractName = (codeC) => {
    var x = props.contractsList.find((item) => item.contractCode == codeC)
    return x.contractName;

  }
  const getcontractValue = (codeC) => {

    var x = props.contractsList.find((item) => item.contractCode == codeC)
    return x.price;

  }

  return (
    <>
      <h1>Details</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control disabled value={props.currentUser.firstName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control disabled value={props.currentUser.lastName} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control disabled value={props.currentUser.email} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridProfile">
            <Form.Label>Profile</Form.Label>
            <Form.Control disabled value={props.currentProfile.profileName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control disabled value={props.currentUser.userName} />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={props.currentUser.password} />
          </Form.Group>
        </Row>
      </Form>

      <h3>Your active contracts </h3>


      <ListGroup as="ol" numbered>
        {props.contractToUserList.map((row) =>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{getcontractName(row.contractCode)}</div>
              {getcontractName(row.contractCode)}
            </div>
            <Badge variant="primary" pill>
              {getcontractValue(row.contractCode)}
            </Badge>
          </ListGroup.Item>
        )}
      </ListGroup>
      <label></label>
    </>

  )
}



const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentProfile: state.profile.currentProfile,
    contractToUserList: state.contractToUser.contractsToUser,
    contractsList: state.contracts.travelContracts
  }
}
export default connect(mapStateToProps)(Details);


