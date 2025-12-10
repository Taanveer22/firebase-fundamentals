import { createContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
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

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
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
        <ul className="flex gap-5 items-center my-5">
          <li className="bg-purple-500 p-1 rounded-md">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="bg-purple-500 p-1 rounded-md">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="bg-purple-500 p-1 rounded-md">
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li className="bg-purple-500 p-1 rounded-md">
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
};

// ====== must use named export for context ========
export { AuthContext };
export default MyLayout;
