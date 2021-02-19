import React, {Component,Fragment} from 'react';
import {Container,Col,Row} from "react-bootstrap";

class FooterDesktop extends Component {
    render() {
        return (
            <div className="m-0 bg-white mt-5 pt-3 shadow-sm">
                <Container>
                    <Row className="px-0 my-5">
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                            <p>BigExpress is considered to be the ‘game-changer’ in Bangladesh’s  industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made BigExpress a beloved brand at home and abroad.</p>
                            <h5 className="footer-menu-title">SOCIAL LINK</h5>
                            <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">THE COMPANY</h5>
                            <a className="footer-link">About Us</a><br/>
                            <a className="footer-link">Contact Us</a><br/>
                            <a className="footer-link">Our Team</a><br/>
                            <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                            <p>Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159 (Help-Line), Engr.Rabbil@yahoo.com</p>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">MORE INFO</h5>
                            <a className="footer-link">How To Purchase</a><br/>
                            <a className="footer-link">Privacy Policy</a><br/>
                            <a className="footer-link">Refund Policy</a><br/>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                            <a><img className="" src="https://hatil.com/sites/default/files/Apple%20sign.png"/></a><br/>
                            <a><img className="mt-2" src="https://hatil.com/sites/default/files/Android%20sign.png"/></a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                    <Container className="">
                        <Row className="px-0">
                            <h6 className="text-white">WE DELIVER IN</h6>
                            <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        </Row>
                    </Container>
                </Container>
            </div>

        );
    }
}

export default FooterDesktop;