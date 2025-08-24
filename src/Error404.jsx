/** Error page for when user tries to access a page that is not found */
export default function Error404() {
  return (
    <>
    <div className="d-flex justify-content-center 
				align-items-center">
      <div className="col-md-12 text-center border p-3">
		<h1 className="text-danger">404</h1>
		<h2>Page Not Found</h2>
		<p className="lead">
			Sorry, the page you are looking
			for does not exist.
		</p>
	</div>
  </div>
    </>
  );
}
