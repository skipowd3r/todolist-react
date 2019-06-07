import React, {Component} from 'react';

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

export default TodoList;