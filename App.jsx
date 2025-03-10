import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [input, setInput] = useState(""); // State for input field

  // Add new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput(""); // Clear input field
    }
  };

  // Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>To-Do List</h2>

      {/* Input Field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>

      {/* Conditional Rendering: Show message when no tasks */}
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text} 
              <button onClick={() => removeTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;