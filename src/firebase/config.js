// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0DHcAmPYF5pGfutrSYwyV4eWf8nHv9ZA",
  authDomain: "fir-fundamentals-b6d41.firebaseapp.com",
  projectId: "fir-fundamentals-b6d41",
  storageBucket: "fir-fundamentals-b6d41.firebasestorage.app",
  messagingSenderId: "773528053016",
  appId: "1:773528053016:web:1dbae5b15308efd30faa6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
