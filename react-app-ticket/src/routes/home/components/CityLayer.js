import React, { Component } from 'react';
import request from '../../../helper/request'
import './CityLayer.less'
class CityLayer extends Component {
    constructor(props) {
        super(props);
        this.state={
            all:{},
            hot:[]
        }
    }
    componentWillMount(){
        var self = this;
        request('/city').then(result=>{
            self.setState({
                all:result.all,
                hot:result.hot
            })

        })
    }
    render() { 
        const {all,hot} = this.state;
        var letters = Object.keys(all);
        return (
            <div className="citylayer">
                <div className="head">
                    <span 
                        className="closebtn"
                        onClick={()=>{this.props.changeShow()}}
                    >关闭</span>
                    选择城市
                </div>
                <div className="content">
                    <div className="container">
                        <div className='title' id="pos">
                            定位城市
                        </div>
                        <div className="cityItemlist">
                            <div className="cityItem">杭州</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className='title' id="hot">
                            热门城市
                        </div>
                        <div className="cityItemlist">
                            {hot.map(item=>{
                                return <div key={item.id} className="cityItem">{item.regionName}</div>
                            })}                       
                        </div>
                    </div>
                    <div className="citylist">
                            {
                               letters.map(item=>{
                                   return (
                                    <div key={item}>
                                        <div className="letter" id={item} >{item}</div>
                                        <ul  className='cities'>
                                            {
                                            all[item].map(item=>{
                                                return <li 
                                                            key={item.id}
                                                            onClick={()=>{
                                                                this.props.changeCity(item.regionName);
                                                                this.props.changeShow()
                                                            }}
                                                        >{item.regionName}</li>
                                            })
                                            }
                                        </ul>
                                    </div>
                                   )
                               }) 
                            }
                    </div>
                </div>
                <div className="antor">
                    <ul>
                        <li><a href="#pos">定位</a></li>
                        <li><a href="#hot">热门</a></li>
                        {
                            letters.map(item=>{
                                return  <li key={item}><a href={'#'+item}>{item}</a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default CityLayer;