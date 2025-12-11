import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../firebase/config";
import Navbar from "../components/Navbar";

// ====== must create context outside component =========
const AuthContext = createContext(null);

const MyLayout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    setLoading(true);
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
    setLoading(true);
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
    setLoading(true);
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
    setLoading(true);
    signOut(auth)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const handleLogIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
    handleSignOut,
    user,
    setUser,
    handleSignUp,
    handleLogIn,
    loading,
  };

  useEffect(() => {
    console.log("state change result", user);
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="w-5/6 mx-auto my-10">
      <AuthContext.Provider value={authData}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
};

// ====== must use named export for context ========
export { AuthContext };
export default MyLayout;
