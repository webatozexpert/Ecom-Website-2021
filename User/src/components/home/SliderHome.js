import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
class SliderHome extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <Slider {...settings}>
                <div>
                    <img className="slider-img" src="Images/slider3.jpg"/>
                </div>
                <div>
                    <img className="slider-img" src="Images/slider2.jpg"/>
                </div>
                <div>
                    <img className="slider-img" src="Images/slider1.jpg"/>
                </div>
            </Slider>
        );
    }
}

export default SliderHome;