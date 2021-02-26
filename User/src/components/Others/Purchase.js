import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ApiURL from "../../api/ApiURL";
import {toast, ToastContainer} from "react-toastify";

class Purchase extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    constructor() {
        super();
        this.state={
            purchase_guide:"",
            loaderDiv:"",
            mainDiv:"d-none",
        }
    }

    componentDidMount() {
        let SiteInfo_purchase_guide= sessionStorage.getItem("SiteInfo_purchase_guide");
        if(SiteInfo_purchase_guide==null){
            axios.get(ApiURL.SendSiteInfo).then(response=> {
                let  StatusCode =response.status;
                if(StatusCode==200){
                    let  JSONData =(response.data)[0]['purchase_guide'];
                    this.setState({SiteInfo_purchase_guide:JSONData,loaderDiv:"d-none",mainDiv:""})
                    sessionStorage.setItem("SiteInfo_purchase_guide",JSONData)
                }
                else{
                    toast.error("Something Went Wrong ! Try Again",{
                        position: "top-right"
                    });
                }

            }).catch(error=> {
                toast.error("Something Went Wrong ! Try Again",{
                    position: "top-right"
                });
            });
        }
        else{
            this.setState({purchase_guide:SiteInfo_purchase_guide,loaderDiv:"d-none",mainDiv:""})
        }
    }



    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>


                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Card className={this.state.loaderDiv}>
                                <Card.Body>
                                    <div className="ph-item">
                                        <div className="ph-col-12">
                                            <div className="ph-row">
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ph-item">
                                        <div className="ph-col-12">
                                            <div className="ph-row">
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>

                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                    { ReactHtmlParser(this.state.purchase_guide) }
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

                <ToastContainer />
            </Fragment>
        );
    }
}

export default Purchase;