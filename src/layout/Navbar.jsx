import { useAuth } from "../auth/AuthContext";
import { usePage } from "./PageContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const { setPage } = usePage();
  return (
    
      <header className ="d-flex justify-content-center bg-dark text-white">
      
       <div className = "m-3"><a onClick={() => setPage("activities")}>Activities</a></div> 
        {token ? (
         <div className = "m-3"><a onClick={() => logout()}>Log out</a></div> 
        ) : (
          <>
           <div className = "m-3"><a onClick={() => setPage("register")}>Register</a></div> 
            <div className = "m-3"><a onClick={() => setPage("login")}>Login</a></div>
          </>
        )}
     
    </header>
  );
}