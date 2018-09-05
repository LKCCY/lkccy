import React from 'react';
import Topbar from './components/Topbar.js'
import CarouselTool from './components/CarouselTool.js'
import TabMenu from '../../components/TabMenu.js'
import Rendertobody from '../../components/Rendertobody.js';
import CityLayer from './components/CityLayer.js';
import Movieitems from './components/Movieitems.js'
import request from '../../helper/request'
import './Index.less'
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            city:"",
            movie:[],
            poster:[],
            isShow:false
        }
    }
    changShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    changeCity(info){
        this.setState({
            city:info
        })
    }
    componentWillMount(){
        var self = this;
       request('/index').then(result=>{
        self.setState({
            city:result.city,
            movie:result.movie,
            poster:result.poster,
        })
       })
    }
    render() { 
        return (
            <div className="home">
                <Topbar 
                    city={this.state.city}
                    changeShow={this.changShow.bind(this)}
                >
                </Topbar>
                <div className="home_slider">
                    <div className="mask">
                         <CarouselTool></CarouselTool>
                    </div>
                </div>
                <Movieitems movieArr={this.state.movie}>
                </Movieitems>
                <TabMenu nowType="movie"></TabMenu>
                {
                    this.state.isShow?
                    <Rendertobody>
                        <CityLayer 
                            changeShow={this.changShow.bind(this)}
                            changeCity={this.changeCity.bind(this)}
                        ></CityLayer>
                    </Rendertobody>
                    :
                    null
                }
            </div>
        )
    }
}
 
export default Index;