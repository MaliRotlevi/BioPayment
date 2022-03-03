import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form,Button,ListGroup,ListGroupItem,Badge} from "react-bootstrap";



const Edit=() =>
{
    return  (   
<>
<h1>Edit Details</h1>
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control  disabled placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="password" disabled placeholder="Password" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control disabled placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridUserName">
    <Form.Label>User Name</Form.Label>
    <Form.Control disabled placeholder="Apartment, studio, or floor" />
  </Form.Group>

  
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control disabled />
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
export default Edit

{/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control disabled />
    </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>*/}

  {/*<Button variant="primary" type="submit">
    Submit
    </Button>*/}


