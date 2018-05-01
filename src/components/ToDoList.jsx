import React, { Component } from 'react';
import ListItem from './ListItem'
import ListDoneItem from './ListDoneItem'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            list: [
                {
                    title: 'Задача 1',
                    status: true,
                    index: 1
                },
                {
                    title: 'Задача 2',
                    status: true,
                    index: 2
                },
                {
                    title: 'Задача 3',
                    status: false,
                    index: 3
                }
                ,
                {
                    title: 'Задача 4',
                    status: false,
                    index: 4
                }
            ]
        }
    }

    changeUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    addToList() {
        const value = this.state.userInput;
        if (!value || value.trim() === '') {
            return false
        }
        let listArray = this.state.list
        listArray.push({
            title: value,
            status: true,
            index: this.state.list.length + 1
        })
        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    deleteToList(item) {
        let index = this.state.list.indexOf(item)
        let listArray = this.state.list
        if (index > -1) {
            listArray.splice(index, 1)
            this.setState({
                list: listArray
            })
        }
    }

    editItem(item, title) {
        console.log(item, title);
        let index = this.state.list.indexOf(item)
        let listArray = this.state.list
        if (index > -1) {
            listArray[index].title = title
            this.setState({
                list: listArray
            })
        }

    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.addToList()
        }
    }

    updateState(data) {
        this.setState(data);
    }

    toogleStatus(item) {
        let newItem = item
        newItem.status = !item.status
        let listArray = this.state.list
        listArray[listArray.indexOf(this.item)] = newItem
        this.setState({
            list: listArray
        })
    }


    render() {
        let activeList = this.state.list.filter(value => value.status)
        let unactiveList = this.state.list.filter(value => !value.status)
        return (
            <div className="main">
                <h2>Задачи</h2>

                <div className="btnAdd">
                    <a href="#" onClick={() => {
                        this.state.userInput = prompt('Название задачи', '')
                        this.addToList()
                    }
                    }>Добавить задачу</a>
                </div>
                <div className="blockAdd">
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={(e) => this.changeUserInput(e.target.value)}
                        onKeyPress={(e) => this.handleKeyPress(e)}
                    />
                    <button onClick={() => this.addToList()}>Добавить задачу</button>
                </div>

                <ul>
                    {activeList.map((value, index) => <ListItem
                        item={value}
                        key={value.index}
                        toogleStatus={this.toogleStatus.bind(this)}
                        deleteItem={this.deleteToList.bind(this)}
                        editItem={this.editItem.bind(this)}
                    />)}
                </ul>
                <hr />
                <div className="completed">
                    <h2>Завершенные задачи</h2>
                    <ul>
                        {unactiveList.map((value, index) => <ListDoneItem
                            item={value}
                            key={value.index}
                            updateParentState={this.updateState.bind(this)}
                            toogleStatus={this.toogleStatus.bind(this)}
                        />)}
                    </ul>
                </div>
            </div>
        )
    }
}
