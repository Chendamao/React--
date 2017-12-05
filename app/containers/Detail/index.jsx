import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommonHeader from '../../components/Header/index'
import DetailInfo from './subpage/info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

export default class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.params.id
        return (
            <div>
                <CommonHeader title='产品详情' id = {id} />
                <DetailInfo id= {id} />
                <Buy id= {id} />
                <Comment />
            </div>
        )
    }
}
