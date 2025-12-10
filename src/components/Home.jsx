import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import auth from "../firebase/config";

const Home = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="bg-red-500 p-3">
        Login with google
      </button>
      <br /> <br />
      <button onClick={handleGithubLogin} className="bg-green-500 p-3">
        Login with github
      </button>
      <br /> <br />
    </div>
  );
};

export default Home;
