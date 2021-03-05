import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class ListByCategory extends Component {





    render() {

        const MyList=this.props.ProductData;
        const Category=this.props.Category;
        const MyView=MyList.map((ProductList,i)=>{
            if(ProductList.special_price=="NA"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Card className="card h-100 w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title }</h5>
                            <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                </Col>
            }
            else{

                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Card className="card h-100 w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title }</h5>
                            <p className="product-price-on-card">
                                Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            }

        })

        return (
            <Fragment>
                <Container className="text-center TopSection" fluid={true}>
                    <h4 className="section-title">{Category}</h4>
                    <Row>
                        {MyView}
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ListByCategory;