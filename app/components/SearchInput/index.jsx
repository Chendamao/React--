import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

import './style.less'

export default class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kw: ''
        }
    }
    render() {
        return (
                <input type="text" className='search-input' 
                    onChange={this.ChangeHandel.bind(this)}
                    onKeyUp={this.keyUpHandle.bind(this)}
                    value= {this.state.kw}
                    placeholder='请输入关键字'
                />
        )
    }

    componentDidMount(){
        this.setState({
            kw: this.props.value || ''
        })
    }

    ChangeHandel(e){
        var value = e.target.value
        this.setState({
            kw: value
        }) 
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(this.state.kw)
    }
}
