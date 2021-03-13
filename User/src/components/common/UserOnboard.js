import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import validation from "../../validation/validation";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Redirect} from "react-router";

class UserOnboard extends Component {


    constructor() {
        super();
        this.state={
            btn:"Next",
            MobileNo:"",
            UserRedirect:false
        }
        this.MobileOnChange=this.MobileOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }


    MobileOnChange(event){
        let mobile=  event.target.value;
        this.setState({MobileNo:mobile});
    }


    onUserRedirect(){
        if(this.state.UserRedirect==true){
            return <Redirect to={"/OtpVerification"} />
        }
    }

    onNextClick(){

        let mobile= this.state.MobileNo;
        if(mobile.length==0){
            toast.error("Mobile Number Required",{
                position:"bottom-center"
            });
        }
        else if(!(validation.MobileRegx).test(mobile)){
            toast.error("Invalid Mobile Number",{
                position:"bottom-center"
            });
        }
        else {
            this.setState({btn:"Processing.."});
            axios.get(ApiURL.CreateOtp(mobile)).then((response)=>{
                this.setState({btn:"Next"});
                if(response.status==200,response.data=="1"){
                    toast.success("Verification code has been sent successfully",{
                        position:"bottom-center"
                    });
                    this.setState({UserRedirect:true});
                }
                else {
                    toast.error("Request Fail ! Try Again",{
                        position:"bottom-center"
                    });
                }

            }).catch((error)=>{
                this.setState({btn:"Next"});
                toast.error("Request Fail ! Try Again",{
                    position:"bottom-center"
                });
            })
        }

    }


    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className=" onboardForm">
                                        <h4 className="section-title">USER SIGN IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.MobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
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
                {this.onUserRedirect()}
            </Fragment>
        );
    }
}

export default UserOnboard;