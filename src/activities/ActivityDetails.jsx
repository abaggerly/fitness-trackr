import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { id } = useParams();
  const { data } = useQuery(`/activities/${id}`, "activities");
  console.log({ id });
  console.log(data);

  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + id, ["activities"]);

  return (
    <>
    <div className="text-center border p-3">
      <h5><u>{data?.name}</u></h5>
      <p className="lead">{data?.description}</p>
      <p className="lead text-center">By {data?.creatorName}</p>
      {token && (
        <button
          onClick={() => {
            deleteActivity();
          }} className="btn btn-outline-danger"
        >
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
        
      )
      }</div>
    </>
  );
}