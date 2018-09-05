import React from 'react';
import ReactDom from 'react-dom';
class Rendertobody extends React.Component {
    //上树后创造节点可以渲染
    componentDidMount(){
        this.onpop = document.createElement('div');
        document.body.appendChild(this.onpop);
        this.renderTodiv();
        //执行渲染
    }
    //上树时的操作
    renderTodiv(){
        ReactDom.render(
            this.props.children
            ,
            this.onpop
        )
    }
    unrender(){
        if (!this.onpop) {
            return;
          }
          //手动
        ReactDom.unmountComponentAtNode(this.onpop);
        document.body.removeChild(this.onpop);
        this.onpop = null;
    }
    //数据更新后也要执行渲染
    componentDidUpdate(){
        this.renderTodiv()
    }
    //下数使执行
    componentWillUnmount(){
        this.unrender();
    }
    render() { 
        return (
            <div></div>
        );
    }
}
 
export default Rendertobody;