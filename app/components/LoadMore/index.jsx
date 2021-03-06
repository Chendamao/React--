import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className='load-more' ref='wrapper'>

                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle(){
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn()
    }

    componentDidMount() {

        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;
        function callback(){
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if(top &&  (windowHeight - top > 40)){
                // 当 wrapper 已经被滚动到暴露在可视范围之内的时候，触发加载更多数据事件
                loadMoreFn();
            }
        };

        window.addEventListener('scroll', function(){
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false)
    }
}