import React, { Component } from 'react';
import Movieinfo from './components/Movieinfo.js';
import SeatSelected from './container/SeatSelected.js';
import SeatAll from './components/SeatAll.js';
import './Seat.less';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
const store = createStore(reducer);
class Seat extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <Provider store={store}>
                <div className="seat">
                    <div className='header'>
                        <i className="back"
                            onClick={()=>window.history.back()}
                        ></i>
                        <span>万达影城</span>
                        <i className="share"></i>
                    </div>
                    <Movieinfo></Movieinfo>
                    <SeatSelected></SeatSelected>
                    <div className="seatMain">
                        <div className="topBar"></div>
                        <div className="seatLayout">
                            <div className="screen">B13</div>
                            <div className="map">
                                <SeatAll></SeatAll>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}
 
export default Seat;