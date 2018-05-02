import React, { Component } from 'react';

export default class ListItem extends Component {
    editItem() {
        let title = prompt("Введите новое название", this.props.item.title);
        if (title) {
            this.props.editItem(this.props.item, title)
        }
    }
    render() {
        return (
            <li key={this.props.item.index} className={this.props.item.status ? "active" : "unactive"}>
                <span onClick={() => this.props.toogleStatus(this.props.item)} className="itemTitle">{this.props.item.title}</span>
                <button onClick={() => this.props.deleteItem(this.props.item)} className="btnDelete">Удалить</button>
                <button onClick={this.editItem.bind(this)} className="btnEdit">Редактировать</button>
            </li>
        )
    }
}
