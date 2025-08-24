import useQuery from "../api/useQuery";
import { Link } from "react-router";

export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  if (loading || !activities) return <p className="text-center lead">Activities Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul className="list-group">
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
   
  );
}


function ActivityListItem({ activity }) {
  return (
    <Link className="link-offset-2 link-underline link-underline-opacity-0" to={`/activities/${activity.id}`} >
    <li className ="list-group-item text-center">
     {activity.name}
    </li>
    </Link>
  );
}