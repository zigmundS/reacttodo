import React, { Component } from 'react';

export default class ListDoneItem extends Component {
    render() {
        return (
            <li key={this.props.item.index} className={this.props.item.status ? "active" : "unactive"}>
                <span>{this.props.item.title}</span>
                <button onClick={() => this.props.toogleStatus(this.props.item)}>Восстановить</button>
            </li>
        )
    }
}
