import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div id="todoList">
        <ul>
          <NewTodo/>
          <Todo/>
        </ul>
      </div>
      
      
    );
  }
}

export default App;
