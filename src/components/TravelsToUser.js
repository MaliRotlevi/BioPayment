import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormHelperText } from '@mui/material';




 const TravelToUser = (props) => {
    return (
        <>
            <FormControl style={{fontSize: "115%",width:"33%",marginRight:"34%"}} >
                <OutlinedInput placeholder="Please enter text" />
                {/* <MyFormHelperText /> */}
            </FormControl>
        </>
    )

}
export default TravelToUser;