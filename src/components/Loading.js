import React, { useState, Component } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Loading.css'
import { Dropdown, MenuItem, DropdownButton, Button } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";



export default function Loading() {
    const [showPaymentDetails, setshowPaymentDetails] = React.useState(false)
    const openPaymentDetails = () => setshowPaymentDetails(true)
    return (
        <>
            <h1 id='header'>Loading Constract</h1>
            <div id="btnDropDown">
                <Row className="mb-3" >
                    <Form.Group as={Col} md="4" >
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                choose travel constract
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1" active>
                                    ערך צבור 100
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">ערך צבור 50</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">ערך צבור 200</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4">חופשי יומי</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">חופשי שנתי</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">חופשי חודשי</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Row>
                </div>
                <div id="btnPaymentDetails">
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Button  variant="primary" onClick={openPaymentDetails} size="lg">
                            payment- details
                        </Button>
                    </Form.Group>
                </Row>
                </div>
           


            {/* <div class="btn btn-primary mb-3" id="btnCon" onClick={openPaymentDetails}> <span class="ps-3">continue</span> <span class="fas fa-arrow-right"></span> </div> */}




            {showPaymentDetails ?
                <div class="container p-0" >
                    <div class="card px-4">
                        <p class="h8 py-3">Payment Details</p>
                        <div class="row gx-3"></div>

                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Person Name</p> <input class="form-control mb-3" type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Card Number</p> <input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn btn-primary mb-3"> <span class="ps-3">Pay</span> <span class="fas fa-arrow-right"></span> </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}
