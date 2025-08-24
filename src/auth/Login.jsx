import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
    <div className="text-center border p-4">
      <h4>Log in to your account</h4>
      
      <form action={tryLogin}>
        <label className="form-label">
          Username
          <input type="text" name="username" className="form-control" required />
        </label>
        <label>
          Password
          <input type="password" name="password" className="form-control" required />
        </label>
        <div className="m-3">
        <button className="btn btn-outline-primary">Login</button>
        {error && <output>{error}</output>}
        </div>
      </form>
      
      <Link to="/register">Need an account? Register here.</Link>
      </div>
    </>
  );
}