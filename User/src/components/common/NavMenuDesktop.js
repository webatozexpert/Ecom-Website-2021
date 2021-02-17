import React, {Component,Fragment} from 'react';
import  {Container,Nav,Navbar, Row, Col, Button, InputGroup} from "react-bootstrap";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <Row>
                    <Col className="p-0" lg={4} md={4} sm={12} xs={12}>
                        <a href="" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a>
                        <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
                    </Col>
                    <Col className="p-0" lg={4} md={4} sm={12} xs={12}>
                        <div className="input-group w-100">
                            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                            <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                        </div>
                    </Col>
                    <Col className="p-0" lg={4} md={4} sm={12} xs={12}>
                        <a className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></a>
                        <a className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></a>
                        <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                        <a className="h4 btn">LOGIN</a>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default NavMenuDesktop;