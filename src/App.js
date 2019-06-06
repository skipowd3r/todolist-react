import React, { Component } from 'react';
import './App.css';
import './index.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentTask: { text: '', key: '' }
    }
    //this.inputElement = React.createRef();
  }
  // set current task to state
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
        /> </div>
        <TodoTasks 
        entries={this.state.list}
        removeTask={this.removeTask}
        />
       
      </div>
    )
  }
}

class TodoList extends Component {
  componentDidUpdate() {
    this.inputElement.focus()
  }
  render() {
    const { addTask, handleInput, currentTask } = this.props;
    return (
      <div className="todo-list-main">
        <div className='header'>
          <form onSubmit={addTask}>
            <input
              placeholder="Enter Task"
              ref={(el => this.inputElement = el)}
              value={currentTask.text}
              onChange={handleInput}
            />
            <button type='submit'> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}


class TodoTasks extends Component {
  createTasks = item => {
    return (
      <li className='tasks' key={item.key} onClick={() => this.props.removeTask(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const { entries } = this.props;
    const showList = entries.map(this.createTasks)
    return(
      <ul className="dynamic-list">{showList}</ul>
    )
  }
}
export default App;
