import useQuery from "../api/useQuery";
import DeleteActivityComponent from "./DeleteActivityComponent";

export default function DisplayActivities() {
  const { data } = useQuery("/activities", "allActivities");

  if (data?.length > 0) {
    return (
      <ul>
        {data.map((activity) => (
          <li key={activity.id}>
            <p>{activity.name}</p>
            <DeleteActivityComponent id={activity.id} />
          </li>
        ))}
      </ul>
    );
  }
}