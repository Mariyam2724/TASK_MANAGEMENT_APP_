import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Manage Your Tasks Efficiently</h1>

        <p>
          A modern MERN Task Management application to organize your daily
          work, track progress, and stay productive.
        </p>

        <Link to="/tasks">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;