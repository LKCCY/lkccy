import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Paragraph.less';
import cn from 'classnames';
class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNeedCollipse:false,
            collipse:false
        }
    }
    componentDidMount(){
        this._height = this.props.height;
        var showHeight = $(this.refs.container).innerHeight();
        if(showHeight > this._height){
            this.setState({
                isNeedCollipse:true,
                collipse:true
            })
        }
    }
    showToggle(){
        if(this.state.isNeedCollipse){
            this.setState(prevState=>{
                return{
                    collipse:!prevState.collipse
                }
            })
        }
    }
    render() { 
        return (
            <div
                style={this.state.collipse?{'maxHeight':this._height}:null}
                className={cn({
                    "paragraph":true,
                    "paragraph_collipse":this.state.collipse
            })} 
                ref="container" 
                onClick={()=>this.showToggle()}
            >
                {this.props.children}
                {
                    this.state.collipse?
                    <div className="deploy">展开</div>
                    :null
                }
            </div>
        );
    }
}
Paragraph.propTypes = {
    height : propTypes.number,
    children : propTypes.any
}
export default Paragraph;