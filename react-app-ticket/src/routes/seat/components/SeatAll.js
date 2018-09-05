import React, { Component } from 'react';
import seatData from '../../../mock/seat.json';
import {connect} from 'react-redux';
class SeatAll extends Component {
    constructor(props) {
        super(props);
        //定义图片的宽高
        this.seatHeight = 40;
        this.seatWidth = 40;
    }
    componentDidMount(){
         //缓存照片
        this.emptyImg = new Image();
        this.soldImg = new Image();
        this.selectImg = new Image();
        var count = 0;
        this.emptyImg.src = './source/seat-empty.png';
        this.soldImg.src = './source/seat-sold.png';
        this.selectImg.src = './source/seat-selected.png';
        this.ctx = this.refs.canvas.getContext('2d');
        const progress = ()=>{
            count++;
            if(count==3){
                this.draw();
            }   
        }
        //获取设备dp 逻辑像素/物理像素；
        this.radio = parseInt(window.devicePixelRatio);
        this.drawSeatHeight = this.seatHeight * this.radio;
        this.drawSeatWidth = this.seatWidth * this.radio;
        this.emptyImg.onload = progress;
        this.soldImg.onload = progress;
        this.selectImg.onload = progress;
        //获取canvas的宽高
        this.rowMax = 0;
        this.colMax = 0;
        seatData.data.forEach(item=>{
            if(item.xPos>this.rowMax){
                this.rowMax = item.xPos;
            }
            if(item.yPos>this.colMax){
                this.colMax = item.yPos;
            }
        });
        this.refs.canvas.style.width=this.rowMax*this.seatWidth+'px';
        this.refs.canvas.style.height=this.colMax*this.seatHeight+'px';
        this.refs.canvas.width=this.rowMax*this.seatWidth*this.radio;
        this.refs.canvas.height=this.colMax*this.seatHeight*this.radio;
        
    }
    //判断座位的位置，并将位置添加到数组中去
    clickSeat(e){
        var x = e.pageX;
        var y = e.pageY;
        var offsetPos = this.refs.canvas.getBoundingClientRect();
        var realX = e.pageX - offsetPos.left;
        var realY = e.pageY - offsetPos.top;
        var xIndex = Math.ceil(realX/this.seatWidth);
        var yIndex = Math.ceil(realY/this.seatHeight);
        //判断当前位置是否已经销售
        var targetSeat = seatData.data.find(item=>{
            return item.xPos==xIndex&&item.yPos == yIndex;            
        })
        if(targetSeat.isSold) return;
        var isExist = false;
        if(targetSeat.isSold) return;
        this.props.seatSelected.forEach(item=>{
            if(item.id == targetSeat.id) isExist=true;
        })
        if(isExist){
            this.props.delSeat(targetSeat)
        }else{
            this.props.addSeat(targetSeat)
        }
    }
    //画数据中的图片
    draw(){
        seatData.data.forEach(item=>{
            var img = item.isSold?this.soldImg:this.emptyImg;
            var x = (item.xPos-1)*this.seatWidth;
            var y = (item.yPos-1)*this.seatHeight;
            this.ctx.drawImage(img,x*this.radio,y*this.radio,this.drawSeatWidth,this.drawSeatHeight)
        })
    }
    //画选中的座位
    drawSelect(){
        this.props.seatSelected.forEach(item=>{
            var img = this.selectImg;
            var x = (item.xPos-1)*this.seatWidth;
            var y = (item.yPos-1)*this.seatHeight;
            this.ctx.drawImage(img,x*this.radio,y*this.radio,this.drawSeatWidth,this.drawSeatHeight);
            //画字
            this.ctx.font = `normal ${10*this.radio}px 微软雅黑`;
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`${item.yPos}排`,x*this.radio+this.drawSeatWidth/2,y*this.radio+this.drawSeatWidth*1.3/3)  
            this.ctx.fillText(`${item.xPos}坐`,x*this.radio+this.drawSeatWidth/2,y*this.radio+this.drawSeatWidth*2.3/3)  
        })
    }
    //更新时画选中的数据
    componentDidUpdate(){
        var w = this.rowMax*this.seatWidth*this.radio;
        var h = this.colMax*this.seatHeight*this.radio;
        this.ctx.clearRect(0,0,w,h);
        this.draw();
        this.drawSelect();
    }
    render() { 
        return (
                <canvas ref="canvas" onClick={this.clickSeat.bind(this)}></canvas>
        )
    }
}
 
export default connect(
    (state)=>({
        seatSelected:state.seatSelected
    }),
    (dispatch)=>({
        delSeat(item){
            dispatch({'type':"delSeat",item})
        },
        addSeat(item){
            dispatch({'type':'addSeat',item})
        }
    })
)(SeatAll);