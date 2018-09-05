import React from 'react';
import './Baseinfo.less';
class Baseinfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className='baseinfo'>
                <div className="aside">
                    <h3>红海行动</h3>
                    <div className='translate'>Operation Red Sea</div>
                    <div className="type">动作/剧情</div>
                    <div className="type">中国大陆</div>
                    <div className="type">2018年2月</div>
                </div>
                <div className="poster"
                    onClick ={()=>this.props.showSlider()}
                ></div>
            </div>
        );
    }
}
 
export default Baseinfo;