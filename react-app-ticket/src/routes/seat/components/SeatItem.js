import React, { Component } from 'react';
import './SeatItem.less';
import {connect} from 'react-redux';
class SeatItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="seatItem">
                <div className="aside">
                    <div className="loca">
                        {
                            this.props.info.yPos
                        }排{
                            this.props.info.xPos
                        }座
                    </div>
                    <div className="price">
                        <b>卡</b>
                        33元
                    </div>
                </div>
                <div className="close"
                    onClick={()=>this.props.delSeat(this.props.info)}
                >
                </div>
            </div>
        )
    }
}
 
export default connect(
    null,
    (dispatch)=>({
        delSeat(item){dispatch({'type':"delSeat",item})}
    })
)(SeatItem)