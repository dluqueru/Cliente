// Ejercicio 1: Crea una aplicación de lista de tareas pendientes
// con los siguientes criterios:
// - Se deben poder añadir tareas.
// - Se deben poder eliminar tareas existentes.

import { useEffect, useState } from "react";

function TaskList(){

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    
    function handleChange(e){
        setInputValue(e.target.value);
    }
    
    function addTask(){
        if (inputValue !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }
    
    const handleDelete = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
    
    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
    },[])

    return (
        <div>
            <input id="task" type="text"  placeholder="Add task" value={inputValue} onChange={handleChange}/>
            <button onClick={addTask}>Add</button>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ul id="taskList">
                    {tasks.map((task, index) => (
                        <li key={index} id={task}>
                            {task}
                            <button onClick={() => handleDelete(index)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;