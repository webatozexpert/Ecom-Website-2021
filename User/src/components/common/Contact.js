import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className=" onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button className="btn btn-block m-2 site-btn">SEND</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>

                                    <iframe className="GoogleMap"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.259414174976!2d89.44422201441127!3d24.85498808405651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdabfa65fd3df5%3A0xd636559ea39360d5!2sAver-Fresh%20Limited!5e0!3m2!1sbn!2sbd!4v1613793072061!5m2!1sbn!2sbd"
                                        width="600" height="450"  allowFullScreen=""
                                        loading="lazy"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;