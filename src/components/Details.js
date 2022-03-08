import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Button, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import './Details.css';



const Details = (props) => {



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
            <Form.Control disabled value={props.currentUser.profileCode} />
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

      <h3>Your active constracts </h3>


      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge variant="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge variant="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge variant="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}
export default connect(mapStateToProps)(Details);


