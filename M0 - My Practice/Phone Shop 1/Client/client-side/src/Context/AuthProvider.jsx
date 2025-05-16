import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userCart, setUserCart] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        fetch(`http://localhost:3000/user/${currentUser.email}`)
          .then((res) => res.json())
          .then((data) => {
              setUserCart(data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const SignOut = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
    SignOut,
    userCart,
    setUserCart,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
