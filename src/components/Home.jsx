import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import auth from "../firebase/config";

const Home = () => {
  // step 01
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // step 02
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

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* step 03 */}
      <button onClick={handleGoogleLogin} className="bg-red-500 p-3">
        Login with google
      </button>
      <br /> <br />
      <button onClick={handleGithubLogin} className="bg-green-500 p-3">
        Login with github
      </button>
      <br /> <br />
      <button onClick={handleTwitterLogin} className="bg-blue-500 p-3">
        Login with twitter
      </button>
      <br /> <br />
    </div>
  );
};

export default Home;
