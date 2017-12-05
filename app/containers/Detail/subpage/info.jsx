import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Detail from '../../../components/DetailInfo/index'

export default class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            detailInfo:false
        }
    }
    render() {
        return (
            <div>
                <Detail data={this.state.detailInfo} />
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            detailInfo:{
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                title: '天下第一锅',
                star: 4,
                price: '88',
                subTitle: '重庆 & 四川 麻辣火锅',
                desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
            }
        })
    }

}
