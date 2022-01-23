import './Loading.css';
import React, { useState, Component } from "react";


const Loading = (props) => {

    // openPaymentInput()
    // {

    // }
    return (
        <div> 
            <form action="">
               
                <div class="row">
                    <div class="col-md-3">
                    <div class="btn btn-primary w-100">30</div>
                    </div>
                    <div class="col-md-3">
                    <div class="btn btn-primary w-100">50</div>
                    </div>
                    <div class="col-md-3">
                    <div class="btn btn-primary w-100">100</div>
                    </div>
                    <div class="col-md-3">
                    <div class="btn btn-primary w-100" >other</div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-3">
                    <div class="inputWithIcon"> <input class="form-control" id="in" type="text"  /> <span class=""> </span> </div>
                    </div>
                    </div>
                 
                <div class="row">
                    <div class="col-12">
                    
                        <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Credit Card</span>
                            <div class="inputWithIcon"> <input class="form-control" type="text"  /> <span class=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt=""/></span> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Expiration<span class="ps-1">Date</span></span>
                            <div class="inputWithIcon"> <input type="text" class="form-control"  /> <span class="fas fa-calendar-alt"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4"> <span>Code CVV</span>
                            <div class="inputWithIcon"> <input type="password" class="form-control"  /> <span class="fas fa-lock"></span> </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span>
                            <div class="inputWithIcon"> <input class="form-control text-uppercase" type="text"  /> <span class="far fa-user"></span> </div>
                        </div>
                    </div>
                    
                    <div class="col-12 px-md-5 px-4 mt-3">
                        <div class="btn btn-primary w-100">Pay</div>
                    </div>
                </div>
                </form>
        </div>
    );
}
export default Loading;