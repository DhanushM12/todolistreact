import React, {useState} from 'react'
import TodoItem from './TodoItem'


// session 

function TodoMain() {
    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setTaskArray((prevTasks) => {
            return [...prevTasks, task];
        })
        setTask('');
    }
    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <input type="text" value={task} placeholder="Add your task" onChange={onTaskChange}/>
               <button onClick={addTask}>Add Task</button>
               <ol>
                   {
                       taskArray.map((val, index) => {
                           return <TodoItem text={val} id={index} />
                       })
                   }
               </ol>
            </div>
        </div>
    )
}

export default TodoMain;
