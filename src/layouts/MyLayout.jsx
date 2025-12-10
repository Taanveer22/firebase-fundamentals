import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import auth from "../firebase/config";

// ====== must create context outside component =========
const AuthContext = createContext(null);

const MyLayout = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
      });
  };

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };

  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
    handleSignOut,
    user,
    setUser,
  };

  useEffect(() => {
    console.log("state change result", user);
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="w-5/6 mx-auto my-10">
      <AuthContext.Provider value={authData}>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
};

// ====== must use named export for context ========
export { AuthContext };
export default MyLayout;
