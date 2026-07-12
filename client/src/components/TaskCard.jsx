import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";

function TaskCard({ task, onEdit, onDelete }) {
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
        <button className="edit-btn" onClick={() => onEdit(task)}>
          <FaEdit /> Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(task._id)}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;