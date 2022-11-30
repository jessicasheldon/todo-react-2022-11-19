import React, { Component } from 'react';
import './NewTodo.css';;

class NewTodo extends Component {
  render() {
    return (
        <div id="myForm">
            <form>
                <input type="text" placeholder="ToDo..." id="newItem"></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
       
    );
  }
}

export default NewTodo;