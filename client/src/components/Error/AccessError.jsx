//navigation
import { Link } from "react-router-dom";

const AccessError = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Access Denied</h1>
          <p className="py-6">
            You do not have permission to access this page. Please contact the
            administrator if you believe this is an error.
          </p>
            <Link to="/">
          <button className="btn btn-primary">Home Page</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessError;