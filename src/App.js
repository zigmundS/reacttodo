import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
// import ShoppingList from './components/ShoppingList';
import List from './components/List';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    list: []
  }
  render() {
    const {list} = this.state;
    return (
      <div className="App">

        <ToDoList />
        <hr />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          тест реакт!
        </p>
        <p>
          <Input name='www' />
        </p>
        <List />
        {/* <ShoppingList /> */}
      </div>
    );
  }
}

export default App;
