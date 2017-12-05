import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home.js'
import HomeList from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore/index'
import '../style.less'

export default class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],  //存储列表信息的
            hasMore: false, // 记录当前状态下还有没有更多的数据可供加载
            isLoadingMore : false, //  记录当前状态下，是“加载中...”还是“点击加载更多”
            page: 1  //下一页的页面
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.show == 'true'
                    ? <h2 className='home-list-title'>猜你喜欢</h2>
                    : ''
                }
               {
                   this.state.data.length
                   ? <HomeList data={this.state.data} hasMore = {this.state.hasMore} />
                   : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoredata.bind(this)} />
                    : <div></div>
                }
            </div>
        )
    }

    componentDidMount(){
        //获取首屏数据
        this.loadFirstPageData();
    };

    //获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getListData(this.props.cityName,0);
        this.resultHandle(result)
    }

    // 加载更多数据
    loadMoredata() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page  // 下一页的页码
        const result = getListData(cityName,page);

        //  处理数据
        this.resultHandle(result)

        //增加 page 的基数
        this.setState({
            page: page+1,
            isLoadingMore: false
        })
    }

    //数据处理函数
    resultHandle(result){
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const hasMore = json.hasMore;
            const data = json.data;
            if(data.length){
                this.setState({
                    hasMore: hasMore,
                    data: this.state.data.concat(data)
                })
            }
        })
    }
}