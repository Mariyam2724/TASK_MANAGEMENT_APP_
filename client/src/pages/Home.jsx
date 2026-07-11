import TaskForm from "../components/TaskForm";

function Home() {
  return (
    <div className="container">

      <h1>My Tasks</h1>

      <p>Manage your daily tasks efficiently.</p>

      <TaskForm />

    </div>
  );
}

export default Home;