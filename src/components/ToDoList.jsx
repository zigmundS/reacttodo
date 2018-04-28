import React, {Component} from 'react';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            list: ['qwe', 123]
        }
    }

    changeUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    addToList(value) {
        if (value.trim() === '') {
            return false
        }
        let listArray = this.state.list
        listArray.push(value)
        this.setState({
            list: listArray,
            userInput: ''
        })
    }


    render() {
        return (
            <div className="main">
                <h2>todo</h2>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={ (e) => this.changeUserInput(e.target.value) }
                />
                <button onClick={ () => this.addToList(this.state.userInput) }>Add</button>
                <ul>
                    {this.state.list.map( (value) => <li>{value}</li>)}
                </ul>
            </div>
        )
    }
}
