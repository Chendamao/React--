import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommonHeader from '../../components/Header/index'
import UserInfo from '../../components/userInfo'
import OrderList from './subPage/orderList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        
        return (
            <div>
                <CommonHeader title='用户信息' backRouter='/' />
                <UserInfo userName = {this.props.userinfo.username} cityName = {this.props.userinfo.cityName} />
                <OrderList userName = {this.props.userinfo.username} />
            </div>
        )
    }

    componentDidMount(){
        //如果未登录，跳转到登录页面
        if(!this.props.userinfo.username){
            hashHistory.push('/login')
        }
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)