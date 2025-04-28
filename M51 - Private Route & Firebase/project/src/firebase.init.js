// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCfxrYt439WVlGEUyrfpPisS1UKdq_83c",
  authDomain: "ph-fb3.firebaseapp.com",
  projectId: "ph-fb3",
  storageBucket: "ph-fb3.firebasestorage.app",
  messagingSenderId: "749168601901",
  appId: "1:749168601901:web:df2046cf121197760ac1a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);