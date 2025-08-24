import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate(`/activities`);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
    <div className="text-center border p-3">
      <h4>Register for an account</h4>
      <form action={tryRegister}>
        <label className="form-label">
          Username
          <input type="text" name="username" className="form-control" required />
        </label>
        <label className="form-label">
          Password
          <input type="password" name="password" className="form-control" required />
        </label>
        <div>
        <button className="btn btn-outline-primary m-2">Register</button>
         </div>
        {error && <output>{error}</output>}
      </form>
      <Link to={`/login`}>Already have an account? Log in here.</Link>
       </div>
    </>
  );
}