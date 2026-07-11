function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <div className="task-buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;