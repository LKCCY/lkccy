import React from 'react';
import { Carousel } from 'react-responsive-carousel';
class CarouselTool extends React.Component {
    constructor(props) {
        super(props);
        this.options={
            showStatus:false,
            showArrows:false,
            showThumbs:false,
            autoPlay:true
        }
    }
    render() { 
        return (
            <Carousel {...this.options}>
                <div>
                    <img src="./source/slide/slide1.jpeg" />
                </div>
                <div>
                    <img src="./source/slide/slide2.jpeg" />
                </div>
                <div>
                    <img src="./source/slide/slide3.jpeg" />
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselTool;