import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Index from './routes/home/Index.js';
import User from './routes/user/User.js';
import Detail from './routes/detail/Detail.js';
import Seat from './routes/seat/Seat.js'

ReactDom.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/seat" component={Seat} />
        </Switch>
    </HashRouter>
    ,
    document.getElementById("root")
)