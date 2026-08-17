import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4">
      <h1 className="font-bold text-xl">Auth Practice</h1>

      <div className="flex gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
          to="/register"
        >
          Register
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;