import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <div className="not-completed-todo">
            <button className="o">o</button>
            <button className="x">x</button>
            <p>Do A thing</p>
        </div>
    );
  }
}

export default Todo;