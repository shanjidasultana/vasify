

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import initializeFirebase from "../Components/Login/Firebase/firebase.init.js";
  
  initializeFirebase();
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
  
    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setError("");
          const newUser = { email, displayName: name };
          setUser(newUser);
          // save user to the database
          saveUser(email, name, "POST");
          // send name to firebase
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {});
            history.replace("/");
        })
        .catch((error) => {
          setError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    };
  
    const loginUser = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || "/";
          history.replace(destination);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          saveUser(user.email, user.displayName, "PUT");
          const destination = location?.state?.from || "/";
          history.replace(destination);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    // observe user state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
    }, []);
  
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }, [user.email]);
  
    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    };
  
    // Save User
    const saveUser = (email, displayName, method) => {
      console.log(email, displayName);
      const user = { email, displayName };
      console.log(user);
      fetch("http://localhost:5000/users", {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }).then();
    };
  
    return {
      user,
      admin,
      isLoading,
      signInWithGoogle,
      registerUser,
      loginUser,
      error,
      logOut,
    };
  };

  
export default useFirebase;