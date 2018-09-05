import React from 'react'
import './MovieItem.less'
class MovieItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() { 
        const {name,poster,score,tags,actor,director} = this.props.detail;
        return (
            <div className="movieItem">
                <div className ="posterImg">
                    <img src ={poster}/>
                </div>
                <div className="detail"
                    onClick ={()=>window.location.hash="detail"}
                >
                    <div className='title'>
                        {name}
                    </div>
                    <div className='score'>
                        评分：<span>{score}</span>
                    </div>
                    {director&&<div className="director">导演： {director} </div>} 
                    {actor&&<div className="actor">主演：{actor}</div>}
                    {
                        tags.length == 0 ?null:
                        <div className="tags">
                            {tags.map(item=>{
                                if(item=="今日最佳") return <span key={item} className="tag_blue tag">今日最佳</span>
                                if(item=="口碑最好") return  <span key={item} className="tag_red tag">口碑最好</span>
                            })}
                        </div>
                    }
                </div>
                <div className="buytiket">
                    <span className='buyBtn'
                        onClick={()=>window.location.hash="/seat"}
                    >
                        购票    
                    </span> 
                    <span className="price">
                        9.9元起    
                    </span>   
                </div>
            </div>
        );
    }
}
 
export default MovieItem;