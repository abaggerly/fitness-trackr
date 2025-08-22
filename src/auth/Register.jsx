import { useState } from "react";
import { useAuth } from "./AuthContext";
import { usePage } from "../layout/PageContext";

export default function Register() {
  const { register } = useAuth();
  const { setPage } = usePage();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      setPage("activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h4 className="text-center">Register for an account</h4>
      <form action={tryRegister}>
        <label>
          Username
          <input type="text" name="username" className ="form-control" required />
        </label>
        <label>
          Password
          <input type="password" name="password" className ="form-control" required />
        </label>
        <button className="btn btn-outline-primary">Register</button>
        {error && <output>{error}</output>}
      </form>
      <div className="text-center">
      <a onClick={() => setPage("login")}>
       <u><b> Already have an account? Log in here.</b></u>
      </a>
      </div>
    </>
  );
}