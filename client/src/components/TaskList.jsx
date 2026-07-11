import TaskCard from "./TaskCard";

function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <h3>No Tasks Available</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;