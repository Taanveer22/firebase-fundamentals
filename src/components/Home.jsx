import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";

const Home = () => {
  const {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
    handleSignOut,
    user,
  } = useContext(AuthContext);

  return (
    <div>
      {/* step 03 */}
      <button onClick={handleGoogleLogin} className="bg-yellow-500 p-3">
        Login with google
      </button>
      <h1>{user?.displayName}</h1>
      <p>{user?.photoURL}</p>
      <br /> <br />
      <button onClick={handleGithubLogin} className="bg-green-500 p-3">
        Login with github
      </button>
      <h1>{user?.displayName}</h1>
      <p>{user?.photoURL}</p>
      <br /> <br />
      <button onClick={handleTwitterLogin} className="bg-blue-500 p-3">
        Login with twitter
      </button>
      <h1>{user?.displayName}</h1>
      <p>{user?.photoURL}</p>
      <br /> <br />
      <button onClick={handleSignOut} className="bg-red-500 p-3">
        Sign Out
      </button>
      <br /> <br />
    </div>
  );
};

export default Home;
