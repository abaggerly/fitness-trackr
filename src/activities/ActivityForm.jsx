import useMutation from "../api/useMutation";

export default function ActivityForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/activities", ["activities"]);

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };

  return (
    <>
      <h2>Add a new activity</h2>
      <form action={addActivity}>
        <label className="form-label">
          Name
          <input type="text" name="name" className="form-control"/>
        </label>
        <label>
          Description
          <input type="text" name="description" className="form-control"/>
        </label>
        <button className="btn btn-outline-primary">{loading ? "Adding..." : "Add activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}