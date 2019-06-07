import React, { Component } from 'react';
import './App.css';
import './index.css';
import TodoList from './TodoList.js';
import TodoTasks from './TodoTasks.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentTask: { text: '', key: '' }
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    const taskText = e.target.value;
    const currentTask = { text: taskText, key: Date.now() }
    this.setState({ currentTask, })
  }
  
  addTask = (e) => {
    const newTask = this.state.currentTask;
    if (newTask.text !== '') {
      const updatedList = [...this.state.list, newTask];
      this.setState({
        list: updatedList, currentTask: { text: '', key: '' }
      })
      //instead of using currentTask in element...clear input field! easy!
     // e.target.reset();
    }
    e.preventDefault();
  }

  removeTask = (key) => {
    const filteredList = this.state.list.filter(task => task.key !== key)
    this.setState({ list: filteredList })
  }

  render() {
    return (
      <div className="App"><div id='container'>
        <TodoList
          addTask={this.addTask}
          handleInput={this.handleInput}
          currentTask={this.state.currentTask}
        /> 
      </div>
        <TodoTasks 
        entries={this.state.list}
        removeTask={this.removeTask}
        />
      </div>
    )
  }
}

export default App;