import { Link, NavLink } from "react-router-dom";

import { toast } from "react-toastify";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          TaskMaster
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">

          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
>
  Home
</NavLink>

          <NavLink
  to="/tasks"
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
>
  Task Manager
</NavLink>

          <button
  className="nav-btn login-btn"
  onClick={() =>
    toast.info("Authentication will be available in a future version.")
  }
>
  Login
</button>

          <button
  className="nav-btn signup-btn"
  onClick={() =>
    toast.info("Authentication will be available in a future version.")
  }
>
  Sign Up
</button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;