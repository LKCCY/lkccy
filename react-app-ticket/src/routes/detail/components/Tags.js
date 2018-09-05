import React, { Component } from 'react';
import cn from 'classnames';
import './Tags.less';
class Tags extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if(this.props.tags.length == 0) return null
        const tags = this.props.tags;
        return (
            <div className='tags'>
                {
                    tags.map(item=>{
                        return <span
                                    key={item.text}
                                    onClick={()=>this.props.changeCur(item.text)}
                                    className={cn({
                                        tag:true,
                                        cur:item.text == this.props.cur
                                    })}
                                >
                            {item.text}{item.count}
                        </span>
                    })
                }
            </div>
        )
    }
}
 
export default Tags;