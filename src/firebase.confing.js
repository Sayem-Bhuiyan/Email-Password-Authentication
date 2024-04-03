// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOTZ0OjrVZV2DMhuF2E1IpTH7fofGYrOY",
  authDomain: "user-email-password-auth-80e41.firebaseapp.com",
  projectId: "user-email-password-auth-80e41",
  storageBucket: "user-email-password-auth-80e41.appspot.com",
  messagingSenderId: "341273126675",
  appId: "1:341273126675:web:ea8e5284aaf89ecef85ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;