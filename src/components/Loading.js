import './Loading.css';
import React, { useState, Component } from "react";


const Loading = (props) => {

    // openPaymentInput()
    // {

    // }
    return (
        <div> 
            <form action="">
               
                <div className="row">
                    <div className="col-md-3">
                    <div className="btn btn-primary w-100">30</div>
                    </div>
                    <div className="col-md-3">
                    <div className="btn btn-primary w-100">50</div>
                    </div>
                    <div className="col-md-3">
                    <div className="btn btn-primary w-100">100</div>
                    </div>
                    <div className="col-md-3">
                    <div className="btn btn-primary w-100" >other</div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-3">
                    <div className="inputWithIcon"> <input className="form-control" id="in" type="text"  /> <span className=""> </span> </div>
                    </div>
                    </div>
                 
                <div className="row">
                    <div className="col-12">
                    
                        <div className="d-flex flex-column px-md-5 px-4 mb-4"> <span>Credit Card</span>
                            <div className="inputWithIcon"> <input className="form-control" type="text"  /> <span className=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt=""/></span> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Expiration<span className="ps-1">Date</span></span>
                            <div className="inputWithIcon"> <input type="text" className="form-control"  /> <span className="fas fa-calendar-alt"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4"> <span>Code CVV</span>
                            <div className="inputWithIcon"> <input type="password" className="form-control"  /> <span className="fas fa-lock"></span> </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span>
                            <div className="inputWithIcon"> <input className="form-control text-uppercase" type="text"  /> <span className="far fa-user"></span> </div>
                        </div>
                    </div>
                    
                    <div className="col-12 px-md-5 px-4 mt-3">
                        <div className="btn btn-primary w-100">Pay</div>
                    </div>
                </div>
                </form>
        </div>
    );
}
export default Loading;