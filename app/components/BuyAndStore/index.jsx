import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'

import './style.less'

export default class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        console.log(this.props.isStore)
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                {
                    // 是否已经收藏了
                    this.props.isStore
                    ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                    : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
    storeClickHandle(){
        this.props.storeHandle()
    }
    buyClickHandle(){
        this.props.buyHandle()
    }

}
