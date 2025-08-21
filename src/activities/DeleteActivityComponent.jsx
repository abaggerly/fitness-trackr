import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function DeleteActivityComponent({ id }) {
  const { token } = useAuth();
  const { mutate, error } = useMutation("DELETE", `/activities/${id}`, [
    "allActivities",
  ]);

  const deleteActivity = async () => {
    await mutate();
  };

  return (
    <>
      {token && !error ? <button onClick={deleteActivity}>Delete</button> : ""}
      {token && error ? <output>{error}</output> : ""}
    </>
  );
}