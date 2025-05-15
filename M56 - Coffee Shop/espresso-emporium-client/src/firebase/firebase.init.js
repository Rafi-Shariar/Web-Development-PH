// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5VnkrxIodbLDdQamsMQjTTbL-L8KooI",
  authDomain: "coffee-store-2a940.firebaseapp.com",
  projectId: "coffee-store-2a940",
  storageBucket: "coffee-store-2a940.firebasestorage.app",
  messagingSenderId: "1091545944867",
  appId: "1:1091545944867:web:a02dda0c2aa87bf512f296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);