import { useEffect, useState } from "react";
import API from "../services/api";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);


  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
  console.log(editingTask);
}, [editingTask]);

  return (
    <div className="container">
      <h1>My Tasks</h1>

      <p>Manage your daily tasks efficiently.</p>

      <TaskForm
  editingTask={editingTask}
  setEditingTask={setEditingTask}
  onTaskAdded={fetchTasks}
/>

      <TaskList tasks={tasks}
      onEdit={setEditingTask} />
    </div>
  );
}

export default Home;