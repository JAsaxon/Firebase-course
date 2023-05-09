"use client";
import React, { useState } from "react";
import variables from "../styles/variables.module.scss"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider, } from "../config/firebase.js";
import styles from "../styles/auth.module.scss"
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth.currentUser?.email)
  async function signIn(e: any) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err)
    }
    setPassword("")
    setEmail("")
  }
  async function signInWithGoogle(e: any) {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }

  }
  async function logOut(e: any) {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }

  }
  function LogInfo() {

    return (
      <div></div>
    )
  }
  return (
    <div className={styles.auth}>
      <h2>Before Anything else...</h2>
      <h1>Sign In</h1>
      <LogInfo />
      <div className={styles.emailWrapper}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}

        />
      </div>
      <div className={styles.passwordWrapper}>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className={styles.buttons}>
        <button onClick={() => signIn("")} className={styles.signIn}>Sign in</button>
        <button onClick={signInWithGoogle} className={styles.google}>Sign in with Google</button>
        <button onClick={logOut} className={styles.logOut}>Log out</button>
      </div>
    </div>
  );
}
