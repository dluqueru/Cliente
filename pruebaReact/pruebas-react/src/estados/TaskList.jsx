// Ejercicio 1: Crea una aplicación de lista de tareas pendientes
// con los siguientes criterios:
// - Se deben poder añadir tareas.
// - Se deben poder eliminar tareas existentes.

import { useState } from "react";

function TaskList(){

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(e){
        setInputValue(e.target.value);
    }

    function addTask(){
        if (inputValue !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }

    function deleteTask(task){
        setTasks(""); // TODO de momento lo borra todo
    }

    return (
        <div>
            <input id="task" type="text"  placeholder="Add task" value={inputValue} onChange={handleChange}/>
            <button onClick={addTask}>Add</button>
            <ul id="taskList">
                {tasks.map(task => (
                    <li id={task}>
                        {task}
                        <button onClick={() => deleteTask(task)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;