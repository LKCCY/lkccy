import React from 'react';
import './CommonItem.less';
import Star from '../../../components/Star.js';
import Paragraph from '../../../components/Paragraph.js'
export default class CommonItem extends React.Component{
    constructor(){
        super()
    }
    render(){  
        return(
            <div className="commItem">
                <div className="userPost">
                    <div 
                        className="avator"
                        style={{'backgroundImage':`url(./source/default-avatar.jpg)`}}
                    ></div>
                    <div className='username'>
                        {this.props.info.name}
                    </div>
                    <Star value={this.props.info.score} size={14.5}></Star>
                    <span className="score">{this.props.info.score}</span>
                </div>
                <div className="commContent">
                    <Paragraph height={84}>
                        {this.props.info.content}
                    </Paragraph>
                </div>
                <div className="commtime">
                    <div className="leftSide">
                        <span>{this.props.info.time}</span>
                    </div>
                    <div className="praise">
                        <i
                            className={this.props.info.isZan ? 'active':null}
                            onClick={()=>this.props.changeZan(this.props.info.id)}
                        ></i>
                        {this.props.info.zan}
                    </div>
                </div>
            </div>
        )
    }
}