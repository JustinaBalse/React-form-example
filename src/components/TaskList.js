import React, { useState } from 'react'
import Task from './Task'

function TaskList() {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([
        {id: 1, description: "Lorem ipsum 1", status: false},
        {id: 2, description: "Lorem ipsum 2", status: false},
        {id: 3, description: "Lorem ipsum 3", status: false},
        {id: 4, description: "Lorem ipsum 4", status: false},
        {id: 5, description: "Lorem ipsum 7", status: false},
        {id: 6, description: "Lorem ipsum 11", status: false}
      ]);

    function changeTaskStatus(id) {
        let copyOfTasks = [...tasks];
        copyOfTasks.forEach(task => {
            if(task.id === id){
                task.status = true;
            }
        })
        setTasks(copyOfTasks);
    }

    function deleteTask(id) {
        let copyOfTasks = [...tasks];
        copyOfTasks = copyOfTasks.filter((task) => task.id !== id);
        setTasks(copyOfTasks);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (taskInput) {
          const task = { id: tasks.length+1, description: taskInput, status: false };
          setTasks((oldTasks) => [...oldTasks, task]);
          setTaskInput('');
        } else {
          console.log('empty values');
        }
      };

    let taskList = tasks.map(task => <Task key={task.id} id={task.id} description={task.description} status={task.status} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}/>)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                id='taskInput'
                name='taskInput'
                value={taskInput}
                placeholder = "Add task..."
                onChange={(e) => setTaskInput(e.target.value)}/>
        </form>
        <ul>{taskList}</ul>
    </div>
    
  )
}

export default TaskList