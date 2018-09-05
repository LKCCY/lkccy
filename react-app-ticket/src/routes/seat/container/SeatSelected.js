import React, { Component } from 'react';
import './SeatSelected.less';
import SeatItem from '../components/SeatItem.js';
import {connect} from 'react-redux';
class SeatSelected extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if(this.props.seatSelected.length == 0) return null;
        return (
            <div className='seatSelected'>
                <div className="seatList">
                    {
                        this.props.seatSelected.map(item=>{
                            return <SeatItem
                                key={item.id}
                                info={item}
                            ></SeatItem>
                        })
                    }
                </div>
                <div className="seatBuy">
                    {this.props.seatSelected.length*33}元确认选座
                </div>
            </div>
        )
    }
}
 
export default connect(
    (state)=>({
        seatSelected:state.seatSelected
    }),
    (dispatch)=>({
        delSeat(item){dispatch({'type':"delSeat",item})}
    })
)(SeatSelected);