import { useState } from "react";

const Todo = _ => {

    const [taskList, setTaskList] = useState(['Go to code', 'Walk a dog', 'Eat something']);
    const [newTask, setNewTask] = useState('');



    function handleInputChange(e) {
        setNewTask(e.target.value);
    }


    function addTask() {

    }


    function deleteTask(i) {

    }

    function moveTaskUp(i) {

    }

    function moveTaskDown(i) {

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