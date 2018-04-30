import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div className="App">
        <div className="block">
          <div className="centered">
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
