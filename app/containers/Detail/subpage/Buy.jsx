import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'
import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} 
                buyHandle={this.buyHandle.bind(this)} 
                storeHandle={this.storeHandle.bind(this)} />
            </div>
        )
    }

    componentDidMount(){
        // console.log(123,this.props.store)
        // console.log(456, this.props.storeActions)
        this.checkStoreState()
    }

    //检验当前客户是否已经被收藏
    checkStoreState(){
        const id = this.props.id
        const store = this.props.store

        // some 只要有一个满足即可
        // store.some(item => {
        //     if(item.id === id){
        //         this.setState({
        //             isStore : true
        //         })
        //         // 跳出循环
        //         return true
        //     }
        // })
        store.forEach(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                })
                return false
            }
        })
    }

    //购买事件
    buyHandle() {
        // 验证登录
        const loginFlag = this.loginCheck()
        if(!loginFlag){
            return
        }

        // 购买的流程


        // 跳转到用户主页
        hashHistory.push('/user')
    }
    //收藏事件
    storeHandle() {
        const loginFlag = this.loginCheck()
        if(!loginFlag){
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if(this.state.isStore){
            // 说明当前商户已经被收藏 点击时既要取消收藏
            storeActions.rm({id: id})
        }else{
            // 说明当前商户没有被收藏，点击时要收藏该商户
            storeActions.add({id: id})
        }

        console.log(this.state.isStore)
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }
    //验证登录
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) { // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来 
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)