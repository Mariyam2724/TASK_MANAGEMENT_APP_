import { useEffect, useState } from "react";
import API from "../services/api";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="container">
      <h1>My Tasks</h1>

      <p>Manage your daily tasks efficiently.</p>

      <TaskForm onTaskAdded={fetchTasks} />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;