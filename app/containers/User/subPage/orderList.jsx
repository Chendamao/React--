import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class userInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState: 2  //0-未评价  1-评价中  2-已评价
        }
    }
    render() {
        const orderList = [
            {
                commentState: 0,
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
                title: '汉堡大王',
                count: 3,
                price: '167'
            },
            {
                commentState: 2,
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
                title: '麻辣香锅',
                count: 1,
                price: '188'
            },
            {
                commentState: 0,
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                title: '好吃自助餐',
                count: 2,
                price: '110'
            }
        ]
        return (
            <div>
                {
                    orderList.map((item,index) => (
                        <div className="clear-fix order-item-container" key={index}>
                            <div className="order-item-img float-left">
                                <img src={item.img} />
                            </div>
                            <div className="order-item-comment float-right">
                                {
                                    item.commentState === 0
                                    ? <button className='btn' ref = 'clickDOM' onClick={this.showComment.bind(this,item)}>评价</button>
                                    :
                                        item.commentState === 1
                                        ? ''
                                        : <button className='btn unselected-btn'>已评价</button>

                                }
                            </div>
                            <div className="order-item-content">
                                <span>商户：{item.title}</span>
                                <span>数量：{item.count}</span>
                                <span>价格：￥{item.price}</span>
                            </div>
                            {
                                item.commentState === 1
                                ? <div>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <button>提交</button>
                                    <button>取消</button>
                                </div>
                                : ''
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            // commentState: orderList.commentState
        })
    }
    showComment(e,item){
        console.log(this.refs.clickDOM)
        item.commentState = 1;
    }

}
