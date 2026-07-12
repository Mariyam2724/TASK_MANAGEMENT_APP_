import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import { toast } from "react-toastify";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/tasks/${id}`);

      fetchTasks();

      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task.");
    }
  };

  const markAsCompleted = async (task) => {
  try {
    await API.put(`/tasks/${task._id}`, {
      ...task,
      status: "Completed",
    });

    fetchTasks();

    toast.success("Task marked as completed!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to update task.");
  }
};
  // Load Tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter + Search
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filterStatus === "All" || task.status === filterStatus;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  // Dashboard Counts
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
    <>
      <Navbar />

      <div className="container">
        <h1>Task Dashboard</h1>

        <p>Organize, track and complete your tasks in one place.</p>

        {/* Dashboard */}
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

        {/* Task Form */}
        <TaskForm
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          onTaskAdded={fetchTasks}
        />

        {/* Search + Filter */}
        <div className="search-filter">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-container">
            <label>Filter by Status</label>

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
        </div>

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onEdit={setEditingTask}
          onDelete={deleteTask}
          onComplete={markAsCompleted}
        />
      </div>
    </>
  );
}

export default Home;