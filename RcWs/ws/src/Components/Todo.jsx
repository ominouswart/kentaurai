import { useState } from "react";

const Todo = _ => {

    const [taskList, setTaskList] = useState(['Go to code', 'Walk a dog', 'Eat something']);
    const [newTask, setNewTask] = useState('');



    function handleInputChange(e) {
        setNewTask(e.target.value);
    }


    function addTask() {
        if (newTask.trim() !== '') {
            setTaskList(t => [...t, newTask]);
        }
        setNewTask('');
    }


    function deleteTask(i) {
        const updatedList = taskList.filter((t, ind) => ind !== i);
        setTaskList(updatedList)
    }

    function moveTaskUp(i) {
        if (i > 0) {
            const allTasks = [...taskList];
            [allTasks[i], allTasks[i - 1]] = [allTasks[i - 1], allTasks[i]];
            setTaskList(allTasks);
        }
    }

    function moveTaskDown(i) {
        if (i < taskList.length - 1) {
            const allTasks = [...taskList];
            [allTasks[i], allTasks[i + 1]] = [allTasks[i + 1], allTasks[i]];
            setTaskList(allTasks);
        }
    }



    return <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div className="inputContainer">
            <input 
            type="text"
            placeholder="Add a New Task..."
            value={newTask}
            onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>Add New Task</button>
        </div>

        <ol>
            {
                taskList.map((t, i) => {
                    return <li key={i}>
                        <span className="text">{t}</span>
                        <button className='deleteButton' onClick={_ => deleteTask(i)}>❌</button>
                        <button className='moveButton' onClick={_ => moveTaskUp(i)}>🔼</button>
                        <button className='moveButton' onClick={_ => moveTaskDown(i)}>🔽</button>
                    </li>
                })
            }
        </ol>


    </div>


}


export default Todo;