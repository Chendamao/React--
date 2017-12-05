import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

import SearchInput from '../SearchInput/index'

import './style.less';

export default class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    
    }
    render() {
        return (
            <div id='home-header' className='clear-fix'>
                <div className='home-header-left float-left'>
                    <Link to='city'>
                        <span>{this.props.cityName}</span>
                    </Link>   
                    &nbsp;
                    <i className='icon-angle-down'></i>
                </div>
                <Link to='/login'>
                    <div className='home-header-right float-right'>
                        <i className='icon-user'></i>
                    </div>
                </Link>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className='icon-search'></i>
                        <SearchInput value='' enterHandle={this.enterHandle.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
        
}