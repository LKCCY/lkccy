import React, { Component } from 'react';
import './Movieinfo.less'
class Movieinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="movieinfo">
                <div className="movieName">
                    红海行动
                </div>
                <div className="movieTime">
                    今天 下午2：00
                </div>
            </div>
        )
    }
}
 
export default Movieinfo;