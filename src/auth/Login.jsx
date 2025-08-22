import { useState } from "react";
import { useAuth } from "./AuthContext";
import { usePage } from "../layout/PageContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const { setPage } = usePage();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      setPage("activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h4 className="text-center">Log in to your account</h4>
      <form action={tryLogin}>
        <label>
          Username
          <input type="text" name="username" className ="form-control" required />
        </label>
        <label>
          Password
          <input type="password" name="password" className ="form-control" required />
        </label>
        <button className ="btn btn-outline-primary">Login</button>
        {error && <output>{error}</output>}
      </form>
      <div className="text-center">
      <a onClick={() => setPage("register")}><u><b>Need an account? Register here.</b></u></a>
      </div>
    </>
  );
}