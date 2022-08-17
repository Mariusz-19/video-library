// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo",
  authDomain: "video-library-358111.firebaseapp.com",
  projectId: "video-library-358111",
  storageBucket: "video-library-358111.appspot.com",
  messagingSenderId: "558090168229",
  appId: "1:558090168229:web:8b7f37e8c98d7e69fc2a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;