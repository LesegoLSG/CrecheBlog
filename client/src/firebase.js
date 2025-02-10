// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "creche-blog.firebaseapp.com",
  projectId: "creche-blog",
  storageBucket: "creche-blog.firebasestorage.app",
  messagingSenderId: "473575336543",
  appId: "1:473575336543:web:8d383cc577767d7b3dc9ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

