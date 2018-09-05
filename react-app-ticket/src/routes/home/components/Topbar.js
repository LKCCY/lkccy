import React from 'react';
import './Topbar.less'
class Topbar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="topbar">
                <div className='city'
                    onClick={()=>this.props.changeShow()}
                >{this.props.city||"全国"}</div>
                <div className="search"></div>
                <div className="scan"></div>
            </div>
        )
    }
}
export default Topbar