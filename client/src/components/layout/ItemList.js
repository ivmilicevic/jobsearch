import React, { Component } from 'react';
import SingleItem from '../common/SingleItem';

export default class ItemList extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.jobs !== nextProps.jobs) {
            console.log("ItemList - Force update")
            this.forceUpdate();
        }
    }

    render() {
        let items = [];
        if (this.props.jobs) {
            // console.log(this.props.jobs)
            items = this.props.jobs.map((item) => (
                <div
                    onClick={() => this.props.jobClickHandler(item.id)}
                    key={item.id} >
                    <SingleItem
                        job={item}
                        key={item.id}
                    /></div>)
            )
        }
        return (
            <div>{items}</div>
        )
    }
}
