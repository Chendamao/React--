import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../containers'
import Home from '../containers/Home/index'

import City from '../containers/City/index'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail/index'
import Login from '../containers/Login'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

export default class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/login(/:router)' component={Login}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
