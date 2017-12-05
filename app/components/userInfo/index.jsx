import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class userInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        
        return (
            <div className='userinfo-container'>
                <p>
                    <i className='icon-user'></i>
                    {this.props.userName}</p>
                <p>
                    <i className='icon-map-marker'></i>
                    {this.props.cityName}
                </p>
            </div>
        )
    }
}
