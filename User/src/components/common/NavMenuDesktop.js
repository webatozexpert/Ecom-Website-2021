import React, {Component,Fragment} from 'react';
import {Dropdown,Container,Nav,Navbar, Row, Col, Button, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class NavMenuDesktop extends Component {


    constructor() {
        super();
        this.state={
            SearchKey:"",
            SearchRedirectStatus: false,
        }

        this.SearchOnChange=this.SearchOnChange.bind(this);
        this.SearchOnClick=this.SearchOnClick.bind(this);
        this.searchRedirect=this.searchRedirect.bind(this);

    }


    SearchOnChange(event){
        let SearchKey=  event.target.value;
        this.setState({SearchKey:SearchKey});
    }

    SearchOnClick(){
        if(this.state.SearchKey.length>=2){
            this.setState({SearchRedirectStatus:true})
        }
    }


    searchRedirect(){
        if(this.state.SearchRedirectStatus===true){
            return <Redirect to={"/ProductListBySearch/"+this.state.SearchKey} />
        }

    }

    render() {
        return (
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <Row>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <Link to="/" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></Link>
                        <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                    </Col>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <div className="input-group w-100">
                            <input onChange={this.SearchOnChange} name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                            <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                        </div>
                    </Col>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                        <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                        <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                        <Link to="/onboard" className="h4 btn">LOGIN</Link>
                    </Col>
                </Row>

                {this.searchRedirect()}
            </Container>



        );
    }
}

export default NavMenuDesktop;