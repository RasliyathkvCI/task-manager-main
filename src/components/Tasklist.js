import React from 'react';


const Tasklist = () => {
    // Create a state for managing tasks
    const [tasks, setTasks] = React.useState([]);  
    // Add a new task
    /**
     * Adds a new task to the task list.
     * 
     * This function retrieves the value from an input element, creates a new task object,
     * updates the tasks state with the new task, and clears the input element.
     */
    function addTask() {
        // Get the input element
        const inputElement = document.querySelector("input");
        // Get the value of the input element
        const taskName = inputElement.value;
        // Create a new task object
        const newTask = {
            userId: 1,
            id: tasks.length + 1,
            title: taskName,
            completed: false
        };
        // Update the tasks state
        setTasks([...tasks, newTask]);
        // Clear the input element
        inputElement.value = "";
    }
   
    // Fetch tasks from API
    async function fetchTasks() {
        // Fetch tasks from an API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTasks(data);
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
           <h1 style={{ color: 'red' }}>Feature Tasklist</h1>
          
            <input 
                type="text" 
                placeholder="Add new task" 
                style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button 
                onClick={addTask} 
                style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }}
            >
                Add Task
            </button>
            {/* display the tasks */}
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tasks.map(task => (
                    <li 
                        key={task.id} 
                        style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
                    >
                        {task.title}
                    </li>
                ))}
            </ul>
           
        </div>
    );
}

export default Tasklist;