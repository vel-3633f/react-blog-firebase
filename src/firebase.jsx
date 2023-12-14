import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAujN7fE20j91CfyMhWW5a0jfgt_tpRQ_E",
  authDomain: "react-blog-70c1a.firebaseapp.com",
  projectId: "react-blog-70c1a",
  storageBucket: "react-blog-70c1a.appspot.com",
  messagingSenderId: "453789762354",
  appId: "1:453789762354:web:de479da03f1b657c560d2b",
  measurementId: "G-DH9525JG8P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
