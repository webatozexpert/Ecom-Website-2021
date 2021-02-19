import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class FooterMobile extends Component {
    render() {
        return (
            <div className="m-0 bg-white mt-5 pt-1 shadow-sm">
                <Container>
                    <Row className="px-0 my-5">
                        <Col sm={6} xm={6}>
                            <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                            <p>Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159 (Help-Line), Engr.Rabbil@yahoo.com</p>
                        </Col>
                        <Col sm={6} xm={6}>
                            <h5 className="footer-menu-title">SOCIAL LINK</h5>
                            <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                    <Container className="">
                        <Row className="px-0">
                            <h6 className="text-white">WE DELIVER IN</h6>
                            <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. T </p>
                        </Row>
                    </Container>
                </Container>
            </div>

        );
    }
}

export default FooterMobile;