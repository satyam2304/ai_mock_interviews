// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnULOZxdDzdWTvbVUvSvGSZiMVkXC0Mcs",
  authDomain: "prepwise-4f35f.firebaseapp.com",
  projectId: "prepwise-4f35f",
  storageBucket: "prepwise-4f35f.firebasestorage.app",
  messagingSenderId: "306313816907",
  appId: "1:306313816907:web:6f635af1c756d18d3116ce",
  measurementId: "G-LZDW8KG6LX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
