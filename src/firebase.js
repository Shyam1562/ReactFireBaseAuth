import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLqKD0TjASciUBPM5AQN9ZJMAHz7iUnL0",
  authDomain: "react-fb-auth-744b7.firebaseapp.com",
  projectId: "react-fb-auth-744b7",
  storageBucket: "react-fb-auth-744b7.appspot.com",
  messagingSenderId: "303254769792",
  appId: "1:303254769792:web:8fa52da3ac6bb714821665",
  measurementId: "G-D44Q9555F3"
};

// Configuring Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
