import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";
// import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // if (!user) {
  //   return <Navigate to="/login"></Navigate>;
  // }
  return (
    <div>
      <h1> Profile</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.displayName}</h1>
    </div>
  );
};

export default Profile;
