import React, { Component } from 'react';
import CommonItem from './CommonItem.js';
class CommonList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var infoList = this.props.infoList;
        if(infoList.lenght==0) return null;
        return ( 
            <div>
                {
                    infoList.map((item,index)=>{
                        return  <CommonItem 
                                    key={index} 
                                    info={item}
                                    changeZan ={this.props.changeZan}
                                    ></CommonItem>
                    })
                }         
            </div>
        )
    }
}
 
export default CommonList;