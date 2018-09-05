import React, { Component } from 'react';
import './ImageSlider.less';
import { Carousel } from 'react-responsive-carousel';
class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.options={
            showStatus:false,
            showArrows:false,
            showThumbs:false,
        }
    }
    render() { 
        return (
            <div className="imageSlider"
                onClick={()=>this.props.hideSlider()}
            >
                <div className='carouImage'>
                    <Carousel {...this.options}>
                        <div>
                            <img src="./source/image/asset1.jpeg" />
                        </div>
                        <div>
                            <img src="./source/image/asset2.jpeg" />
                        </div>
                        <div>
                            <img src="./source/image/asset3.jpeg" />
                        </div>
                        <div>
                            <img src="./source/image/asset5.jpeg" />
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
 
export default ImageSlider;