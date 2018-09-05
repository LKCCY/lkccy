import React, { Component } from 'react';
import './Actors.less'
class Actors extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var  artist = this.props.artist;
        if(artist.length == 0) return null
        return (
            <div className="actors">
                <ul>
                    {
                        artist.map(item=>{
                            return <li key={item.job}>
                                <div 
                                    className="poster"
                                    style={{'background':`url(${item.image}) center/cover no-repeat`}}
                                ></div>
                                <dl>
                                    <dt>{item.name}</dt>
                                    <dd>{item.job}</dd>
                                </dl>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default Actors;