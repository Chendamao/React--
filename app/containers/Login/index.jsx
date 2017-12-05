import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'

import Header from '../../components/Header'
import LoginItem from '../../components/Login'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

class Login extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render(){
        return (
            <div>
                <Header title='登录' />
                {
                    this.state.checking 
                    ? <div>{/*等待中*/}</div>
                    : <LoginItem LoginHandle = {this.LoginHandle.bind(this)} />
                }
            </div>
        )
    }
    componentDidMount() {
        this.doCheck()
    }
    // 登陆成功之后的处理
    LoginHandle(username){
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        // 跳转链接
        const params = this.props.params
        const router = params.router

        if(router){
            hashHistory.push(router)
        }else {
            //跳转到默认页面，即用户中心页面
            this.goUserPage('/user')
        }
    }
        
    doCheck() {
        const userinfo = this.props.userinfo
        if(userinfo.username){
            //已经登录
            this.goUserPage()
        }else{
            //尚未登录
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        hashHistory.push('/user')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
