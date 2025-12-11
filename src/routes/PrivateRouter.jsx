import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  console.log(children);
  const { user, loading } = useContext(AuthContext);
  // loading state checking
  if (loading) {
    return (
      <p className="text-9xl text-yellow-500 font-bold text-center">
        loading...............
      </p>
    );
  }

  // user state checking
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRouter;
