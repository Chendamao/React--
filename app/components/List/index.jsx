import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './item/index'
import './style.less'

export default class HomeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.data
        return (
            <div>  
                {data.map((item, index) => {
                        return <ListItem key={index} data = {item} />
                    })}
            </div>
        )
    }
}