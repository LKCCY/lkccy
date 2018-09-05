import React from 'react';
import './Detail.less';
import Baseinfo from './components/Baseinfo.js';
import MiddleBtn from './components/MiddleBtn.js';
import Paragraph from '../../components/Paragraph.js';
import Actors from './components/Actors.js';
import request from '../../helper/request';
import Comment from './container/Comment.js';
import {NavLink} from 'react-router-dom';
import ImageSlider from './container/ImageSlider.js'
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist:[],
            showSlider:false
        }
    }
    componentDidMount(){
        request('/artist').then(result=>{
            this.setState({
                artist:result
            })
        })
    }
    hideSlider(){
        this.setState({
            showSlider:false
        })
    }
    showSlider(){
        this.setState({
            showSlider:true
        })
    }
    render() { 
        return (
            <div className='detailInfo'>
                <div className="topBan">
                    <div className="returnBtn">
                        <i className="back"
                            onClick={()=>window.history.back()}
                        ></i>
                        <i className="share"></i>
                    </div>
                    <Baseinfo
                        showSlider={this.showSlider.bind(this)}
                    ></Baseinfo>
                </div>
                <div className="detail_content">
                    <div className="detail_module">
                        <MiddleBtn></MiddleBtn>
                    </div>
                    <div className="detail_module">
                        <Paragraph height ={84}>
                        《红海行动》是由博纳影业集团股份有限公司、
                        中国人民解放军海政电视艺术中心等出品，林超贤执导，
                        冯骥、陈珠珠、林明杰编剧，张译、黄景瑜、海清、杜江、蒋璐霞
                        等主演的动作片。`
                        </Paragraph>
                    </div>
                    <div className="detail_module">
                        <div className="artist">
                            <h3>演职人员</h3>
                        </div>
                        <Actors artist={this.state.artist}></Actors>
                    </div>
                    <div className="detail_module">
                        <div className="hot">
                            <h3>热门评论</h3>
                        </div>
                        <Comment></Comment>
                    </div>
                </div>
                <NavLink to="/seat" className="seat">
                    特惠选座
                </NavLink>
                {
                    this.state.showSlider?
                    <ImageSlider
                        hideSlider={this.hideSlider.bind(this)}
                    ></ImageSlider>
                    :
                    null
                }
            </div>
        );
    }
}
 
export default Detail ;