import useQuery from "../api/useQuery";
import DeleteActivityComponent from "./DeleteActivityComponent";

export default function DisplayActivities() {
  const { data } = useQuery("/activities", "allActivities");

  if (data?.length > 0) {
    return (
      <ul className="list-group d-flex text-center justify-content-center">
        {data.map((activity) => (
          <li className= "list-group-item" key={activity.id}>
            <p>{activity.name}</p>
            <DeleteActivityComponent id={activity.id} />
          </li>
        ))}
      </ul>
    );
  }
}