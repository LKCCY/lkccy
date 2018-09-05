import React, { Component } from 'react';
import Movieitem from './MovieItem.js'
class Movieitems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(this.props.movieArr.length == 0 ) return null
        return (
            <div className="movieitems">
                {
                    this.props.movieArr.map(item=>{
                        return <Movieitem key={item.name} detail={item}></Movieitem>
                    })
                }            
            </div>
        );
    }
}
 
export default Movieitems;