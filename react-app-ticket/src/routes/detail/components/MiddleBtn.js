import React from 'react';
import './MiddleBtn.less';
import Star from '../../../components/Star.js'
class MiddleBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="middlebtn">
                <div className='top'>
                    <div className="summary">
                        <div className='info'>
                            <span>9.3</span>
                            <Star value={9.3}></Star>
                        </div>
                        <div className="say">观众评分</div>
                    </div>
                    <div className="summary">
                        <div className='info'>80%</div>
                        <div className="say">淘宝推荐度</div>
                    </div>
                    <div className="summary">
                        <div className='info'>12222</div>
                        <div className="say">想看人数</div>
                    </div>
                </div>
                <div className="middleBtn">
                    <div><i className="want"></i>想看</div>
                    <div><i className="seen"></i>看过</div>
                </div>
            </div>
        )
    }
}
 
export default MiddleBtn;