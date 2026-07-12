import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";

function TaskCard({ task, onEdit, onDelete, onComplete}) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={`status ${task.status.replace(/\s/g, "")}`}>
          {task.status}
        </span>
      </p>

      <p>
        <FaCalendarAlt style={{ marginRight: "8px", color: "#2563eb" }} />
        <strong>Due Date:</strong>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <div className="task-buttons">

  {task.status !== "Completed" && (
    <button
      className="complete-btn"
      onClick={() => onComplete(task)}
    >
      ✓ Complete
    </button>
  )}

  <button
    className="edit-btn"
    onClick={() => onEdit(task)}
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={() => onDelete(task._id)}
  >
    Delete
  </button>

</div>
    </div>
  );
}

export default TaskCard;