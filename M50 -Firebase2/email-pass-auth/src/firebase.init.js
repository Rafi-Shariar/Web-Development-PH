// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAv-keuxHQwsEghZHSUOYYUTimv957Fi8",
  authDomain: "f2-email-pass-auth.firebaseapp.com",
  projectId: "f2-email-pass-auth",
  storageBucket: "f2-email-pass-auth.firebasestorage.app",
  messagingSenderId: "809781865585",
  appId: "1:809781865585:web:1c9047b52f86345fc53fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

