import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center my-24">
        <span className="loading loading-spinner text-blue-700 loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
