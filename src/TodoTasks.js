import React, {Component} from  'react';

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

export default TodoTasks;