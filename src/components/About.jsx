import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";
import { Navigate } from "react-router-dom";

const About = () => {
  const { handleGoogleLogin, handleSignOut, user } = useContext(AuthContext);
  console.log(user);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div>
      <h1>{user?.email}</h1>
      <p>{user?.displayName}</p>
      <p>{user?.photoURL}</p>
      <img
        src={user?.photoURL || "https://via.placeholder.com/80"}
        alt="user photo"
        className="w-20 h-20 rounded-full"
      />
      <br /> <br />
      <button onClick={handleGoogleLogin} className="bg-green-500 p-2">
        login with google
      </button>
      <br></br> <br />
      <button onClick={handleSignOut} className="bg-red-500 p-2">
        signout
      </button>
    </div>
  );
};

export default About;
