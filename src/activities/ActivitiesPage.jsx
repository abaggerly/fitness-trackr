import ActivityForm from "./ActivityForm";
import DisplayActivities from "./DisplayActivities";

export default function ActivitiesPage() {
  return (
    <>
      <h1 className="text-center">Activities</h1>
      <DisplayActivities />
      <ActivityForm />
    </>
  );
}
