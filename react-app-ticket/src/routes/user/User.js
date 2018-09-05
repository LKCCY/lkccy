import React, {Component } from 'react';
import Topbar from '../../components/TabMenu.js'
import './User.less'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="user">
                <div className="header">
                    <div className="icon">
                        <i className="set"></i>
                        <i className="message"></i>
                    </div>
                    <div className="footer">
                        <div className="aside">
                            <img src="./source/default-avatar.jpg" />
                        </div>
                        <div className="userinfo">
                            <div className="name">sasdas</div>
                            <div className="popular">
                                <span>关注100</span>
                                <span>被关注100</span>
                            </div>
                            <span className="level">
                                黄金会员
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mainPart">
                    <div className="colBox">
                        <div className="title">收藏的电影</div>
                        <span className="amount">20</span>
                    </div>
                </div>
                <div className="mainPart">
                    <div className="colBox">
                        <div className="title">看过的电影</div>
                        <span className="amount">20</span>
                    </div>
                </div>
                <Topbar nowType="user"></Topbar>
            </div>
        );
    }
}
 
export default User;