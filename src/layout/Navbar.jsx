import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header className="text-center">
      <h4>FitnessTrackr <span className="text-danger">Pro</span></h4>
      <nav className="d-flex justify-content-center">
        <NavLink to="/activities" className="text-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover p-2">Activities</NavLink>
        {token ? (
          <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover p-2" onClick={() => logout()}>Logout</a>
        ) : (
          <>
            <NavLink to="/register" className="text-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover p-2">Register</NavLink>
            <NavLink to="/login" className="text-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover p-2">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}