import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1 className="text-center">Activities</h1>
      <ActivityList />
      {token && <ActivityForm />}
    </>
  );
}
