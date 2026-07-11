import { useEffect, useState } from "react";
import API from "../services/api";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
const [filterStatus, setFilterStatus] = useState("All");

const [searchTerm, setSearchTerm] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) 

    
    return;

  try {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  } catch (error) {
    console.error(error);
    alert("Failed to delete task.");
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
  console.log(editingTask);
}, [editingTask]);

const filteredTasks = tasks.filter((task) => {
  const matchesStatus =
    filterStatus === "All" || task.status === filterStatus;

  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesStatus && matchesSearch;
});

const totalTasks = tasks.length;

const pendingTasks = tasks.filter(
  (task) => task.status === "Pending"
).length;

const inProgressTasks = tasks.filter(
  (task) => task.status === "In Progress"
).length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

  return (
    <div className="container">
      <h1>My Tasks</h1>

      <p>Manage your daily tasks efficiently.</p>

<div className="dashboard">

  <div className="dashboard-card">
    <h3>Total</h3>
    <p>{totalTasks}</p>
  </div>

  <div className="dashboard-card">
    <h3>Pending</h3>
    <p>{pendingTasks}</p>
  </div>

  <div className="dashboard-card">
    <h3>In Progress</h3>
    <p>{inProgressTasks}</p>
  </div>

  <div className="dashboard-card">
    <h3>Completed</h3>
    <p>{completedTasks}</p>
  </div>

</div>

      <TaskForm
  editingTask={editingTask}
  setEditingTask={setEditingTask}
  onTaskAdded={fetchTasks}
/>
<div className="search-container">
  <input
    type="text"
    placeholder="Search tasks..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
<div className="filter-container">
  <label>Filter by Status: </label>

  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
  >
    <option value="All">All</option>
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>
</div>
      <TaskList tasks={filteredTasks}
      onEdit={setEditingTask}
      onDelete={deleteTask} />
    </div>
  );
}

export default Home;