import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentItem from './subpage/index'

import './style.less'

export default class ListComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var data = this.props.data
        return (
            <div className='comment-list'>
                {
                    data.map((item, index) => {
                        return <CommentItem key={index} data={item} />
                    })
                }
            </div>
        )
    }

}