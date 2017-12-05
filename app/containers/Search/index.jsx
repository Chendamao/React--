import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../../components/SearchInput/index'
import SearchHeader from '../../components/SearchHeader/index'
import List from './subpage/List'

import './style.less'

export default class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword} />
                <List keyword={params.keyword} category={params.category} />
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.params.category,this.props.params.keyword)
    }
}
