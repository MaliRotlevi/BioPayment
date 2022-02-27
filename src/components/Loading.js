import { Radio } from "@mui/material";
import React, { useState, Component } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './Loading.css'

export default function Loading() {
    const rows = ["aaa", "bbb", "ccc", "rrr", "dddd", "aaa", "bbb", "ccc", "rrr", "dddd"]

    return (
        <>
            <h1 id='header'>Loading Constract</h1>

            <div id="wrapper">
                <div id="first">
                    <Form sx={{ marginLeft: 'auto' }}>
                        {rows.map((name) => (
                            <div key={name} className="mb-3">
                                <Form.Check
                                    type="radio"
                                    name={"radioSet"}
                                    id={name}
                                    label={name}
                                />

                            </div>
                        ))}
                    </Form>
                </div>
                <div id="second">
                    <Box
                        sx={{ width: '50%', height: 400, marginLeft: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}
                    >
                        <FixedSizeList
                            height={400}
                            width={360}
                            itemSize={46}
                            itemCount={200}
                            overscanCount={5}
                        >
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                </div>
            </div>


            <div class="container p-0">
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
