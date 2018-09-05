import React from 'react';
import PropTypes from 'prop-types';
import './Star.less'
class Star extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        var size = this.props.size || 14.5;
        var value = Number(this.props.value);
        const bgSize = `${size}px ${size}px`;
        return (
            <div className='star' 
                style={{'width':size*5,'height':size,'backgroundSize':bgSize}}
            >
                <div className="star_light"
                    style={{'height':"100%",'width':`${value*10}%`,'backgroundSize':bgSize}}
                ></div>
            </div>
        )
    }
}
Star.propTypes = {
    value : PropTypes.number.isRequired,
    size : PropTypes.number
}
//默认分数为5分 默认尺寸为 15；
export default Star;