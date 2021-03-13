import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";

class OtpVerification extends Component {


    constructor() {
        super();
        this.state={
            btn:"Login",
            OtpNo:"",
            UserRedirect:false
        }
        this.OtpOnChange=this.OtpOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    OtpOnChange(event){
        let OtpValue=  event.target.value;
        this.setState({OtpNo:OtpValue})
    }
    onNextClick(){
        let OtpValue=  this.state.OtpNo;
        if(OtpValue!=6){
            toast.error("Invalid Verification Code",{
                position:"bottom-center"
            });
        }
        else{

        }
    }
    onUserRedirect(){

    }


    render() {
        return (
            <div>
                <Fragment>
                    <Container className="TopSection">
                        <Row className="p-2">
                            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                <Row className="text-center ">
                                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                        <Form className=" onboardForm">
                                            <h4 className="section-title">Verification Code</h4>
                                            <h6 className="section-sub-title">Please Enter 6 Digit Verification Code</h6>
                                            <input onChange={this.OtpOnChange} className="form-control m-2" type="text" placeholder="xxxxxx"/>
                                            <button onClick={this.onNextClick} className="btn btn-block m-2 site-btn">{this.state.btn}</button>
                                        </Form>
                                    </Col>
                                    <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                        <img className="onboardBanner" src="Images/otppagebanner.png"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <ToastContainer />
                </Fragment>
            </div>
        );
    }
}

export default OtpVerification;