import React from 'react'
import './Task.css';

function Task(props) {
    const {id, description, status, changeTaskStatus, deleteTask} = props;
  return (
    <li className={status ? "checked" : "" }> {description}
        <button onClick={ () => deleteTask(id)}>delete</button>
        <button onClick={ () => changeTaskStatus(id)}>check</button>
    </li>
  )
}

export default Task