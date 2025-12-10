import { createContext } from "react";
import { Outlet } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import auth from "../firebase/config";

// ====== must create context outside component =========
const AuthContext = createContext(null);

const MyLayout = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

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

  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
  };

  return (
    <div className="w-5/6 mx-auto my-10">
      <AuthContext value={authData}>
        <Outlet></Outlet>
      </AuthContext>
    </div>
  );
};

// ====== must use named export for context ========
export { AuthContext };
export default MyLayout;
