import React, {Component,Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import  ReactDom from 'react-dom';
class ProductDetails extends Component {

    constructor() {
        super();
    }

    imgOnclick(event){
        let imgSrc= event.target.getAttribute('src');
        let PreviewImg= document.getElementById('PreviewImg');
        ReactDom.findDOMNode(PreviewImg).setAttribute('src',imgSrc)
    }



    PriceOption(special_price,price){
        if(special_price==="NA"){
            return(
                <p className="product-price-on-card">Price: { price}TK</p>
            )
        }
        else{
            return(
                <p className="product-price-on-card">
                    Price: <strike class="text-secondary">{ price}TK</strike>  { special_price} TK
                </p>
            )
        }

    }


    render() {
        let ProductData=this.props.ProductData;

        let title =ProductData['ProductList'][0]['title'];
        let price =ProductData['ProductList'][0]['price'];
        let special_price =ProductData['ProductList'][0]['special_price'];
        let image =ProductData['ProductList'][0]['image'];
        let category =ProductData['ProductList'][0]['category'];
        let subcategory =ProductData['ProductList'][0]['subcategory'];
        let remark =ProductData['ProductList'][0]['remark'];
        let brand =ProductData['ProductList'][0]['brand'];
        let star =ProductData['ProductList'][0]['star'];
        let product_code =ProductData['ProductList'][0]['product_code'];
        let img1 =ProductData['ProductDetails'][0]['img1'];
        let img2 =ProductData['ProductDetails'][0]['img2'];
        let img3 =ProductData['ProductDetails'][0]['img3'];
        let img4 =ProductData['ProductDetails'][0]['img4'];
        let des =ProductData['ProductDetails'][0]['des'];
        let color =ProductData['ProductDetails'][0]['color'];
        let size =ProductData['ProductDetails'][0]['size'];
        let details =ProductData['ProductDetails'][0]['details'];




        var ColorDiv="d-none"
        if(color!="NA"){
            let ColorArray = color.split(',');
            var ColorOption=ColorArray.map((ColorList,i)=>{
                return <option value={ColorList}>{ColorList}</option>
            })
            ColorDiv=""
        }
        else{
            ColorDiv="d-none"
        }



        var SizeDiv="d-none"
        if(size!="NA"){
            let SizeArray = size.split(',');
            var  SizeOption=SizeArray.map((SizeList,i)=>{
                return <option value={SizeList}>{SizeList}</option>
            })
            SizeDiv=""
        }
        else{
            SizeDiv="d-none"
        }




        return (
            <Fragment>
                <Container fluid={true}  className="mt-5">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img id="PreviewImg" className="w-100" src={img1}/>
                                    <Container  className="my-3">
                                        <Row>
                                            <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src={img2}/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src={img3}/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src={img4}/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src={img1}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">{des}</h6>
                                    {this.PriceOption(special_price,price)}

                                    <div className={ColorDiv}>
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select className="form-control form-select">
                                            <option value="">Choose Color</option>
                                            {ColorOption}
                                        </select>
                                    </div>

                                    <div className={SizeDiv}>
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select className="form-control form-select">
                                            <option value="">Choose Size</option>
                                            {SizeOption}
                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select className="form-control form-select">
                                            <option value="">Choose Quantity</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>



                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    { ReactHtmlParser(details) }
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProductDetails;