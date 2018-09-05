import React, { Component } from 'react';
import './Distribute.less';
import Star from '../../../components/Star.js'
class Distribute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="distribute">
                <div className="aside">
                    <div className='score'>9.3</div>
                    <p>10000人评论</p>
                </div>
                <ul>
                    <li>
                        <Star value={10} size={8}></Star>
                        <div className="bg">
                            <div 
                                className="mask" 
                                style={{'width':"80%"}}
                            ></div>
                        </div>
                    </li>
                    <li>
                        <Star value={8} size={8}></Star>
                        <div className="bg">
                            <div 
                                className="mask" 
                                style={{'width':"60%"}}
                            ></div>
                        </div>
                    </li>
                    <li>
                        <Star value={6} size={8}></Star>
                        <div className="bg">
                            <div 
                                className="mask" 
                                style={{'width':"20%"}}
                            ></div>
                        </div>
                    </li>
                    <li>
                        <Star value={4} size={8}></Star>
                        <div className="bg">
                            <div 
                                className="mask" 
                                style={{'width':"10%"}}
                            ></div>
                        </div>
                    </li>
                    <li>
                        <Star value={2} size={8}></Star>
                        <div className="bg">
                            <div 
                                className="mask" 
                                style={{'width':"0%"}}
                            ></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
 
export default Distribute;