import { useState, useEffect } from "react";
import API from "../services/api";


function TaskForm({ onTaskAdded, editingTask, setEditingTask })  {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
  if (editingTask) {
    setTask({
      title: editingTask.title,
      description: editingTask.description,
      status: editingTask.status,
      dueDate: editingTask.dueDate
        ? editingTask.dueDate.substring(0, 10)
        : "",
    });
  }
}, [editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editingTask) {
      // Update existing task
      await API.put(`/tasks/${editingTask._id}`, task);
      alert("Task Updated Successfully!");
    } else {
      // Add new task
      await API.post("/tasks", task);
      alert("Task Added Successfully!");
    }

    onTaskAdded();

    setTask({
      title: "",
      description: "",
      status: "Pending",
      dueDate: "",
    });
setEditingTask(null);
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  return (
    <div className="task-form">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          rows="4"
          value={task.description}
          onChange={handleChange}
        ></textarea>

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />

        <button type="submit">
  {editingTask ? "Update Task" : "Add Task"}
</button>

      </form>
    </div>
  );
}

export default TaskForm;