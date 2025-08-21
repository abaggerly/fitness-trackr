import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityForm() {
  const { token } = useAuth();
  const { mutate, error } = useMutation("POST", "/activities", [
    "allActivities",
  ]);

  const addActivity = (FormData) => {
    const name = FormData.get("name");
    const description = FormData.get("description");
    mutate({ name, description });
  };

  return (
    <>
      {token ? (
        <form action={addActivity}>
          <label>
            <input type="text" name="name" />
            <input type="text" name="description" />
          </label>
          <button>Add Activity</button>
          {error ? <output>{error}</output> : ""}
          {/* {!"name" ? <output>{error}</output> : ""} */}
        </form>
      ) : (
        ""
      )}
    </>
  );
}