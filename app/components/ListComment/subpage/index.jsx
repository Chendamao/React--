import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star/index'

import './style.less'

export default class CommentItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var data = this.props.data
        return (
            <div className='comment-item'>
                <h3>
                    <i className='icon-user'></i>
                    &nbsp;
                    {data.username}
                </h3>
                <Star star={data.star} />
                <p>{data.comment}</p>
            </div>
        )
    }

}