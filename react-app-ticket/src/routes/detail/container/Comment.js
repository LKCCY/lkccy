import React from 'react';
import Distribute from '../components/Distribute.js';
import request from "../../../helper/request.js";
import Tags from '../components/Tags.js';
import CommonLIst from '../components/CommonLIst'
import './Comment.less'
class Comment extends React.Component{
    constructor(){
        super()
        this.state ={
            tags:[],
            list:[],
            current:'',
        }
    }
    componentWillMount(){
        var self = this;
        request('/comment').then(result=>{
            self.setState({
                tags:result.tags,
                list:result.list,
            })
        })
    }
    changeCurrent(value){
        this.setState({
            current:value
        })
    }
    changeZan(id){
        this.setState(prevState=>({
            list:prevState.list.map(item=>item.id == id?{...item,isZan:!item.isZan,zan:item.isZan?item.zan-1:item.zan+1}:item)
        }))
    }
    //修改当前筛选的函数
    filterList(){
        if(!this.state.current) return this.state.list;
        if(this.state.list.length != 0){
            return this.state.list.filter(item=>item.tag == this.state.current)
        }
        return [];
    }
    render(){
        return(
            <div className="comment">
                <Distribute></Distribute>
                <div className="taglist">
                     <Tags 
                        tags={this.state.tags}
                        cur = {this.state.current}
                        changeCur = {this.changeCurrent.bind(this)}
                     ></Tags>
                </div>
                <CommonLIst
                    infoList ={this.filterList()}
                    changeZan = {this.changeZan.bind(this)}
                ></CommonLIst>
            </div>
        )
    }
}
export default Comment