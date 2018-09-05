import React from 'react'
import {NavLink} from 'react-router-dom'
import './TabMenu.less'
import cn from 'classnames'
class TabMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="tabMenu">
                <NavLink to="/" className={cn({'btnNav':true,'btnNav_active':this.props.nowType == 'movie'})} >
                    <i className="tabIcon tabIcon_film"></i>
                    <span className="content">电影</span>
                </NavLink>
                <NavLink to="/user" className={cn({'btnNav':true,'btnNav_active':this.props.nowType == 'user'})}>
                    <i className="tabIcon tabIcon_mine"></i>
                    <span className="content">我的</span>
                </NavLink>
            </div>
        );
    }
}
 
export default TabMenu
