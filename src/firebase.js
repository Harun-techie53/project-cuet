
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD19RzH4JIlBcb5wq1DMvjucUWX-DYqRlY",
  authDomain: "project-1-15dc6.firebaseapp.com",
  projectId: "project-1-15dc6",
  storageBucket: "project-1-15dc6.appspot.com",
  messagingSenderId: "208771423803",
  appId: "1:208771423803:web:6b9df26acb6ac83438061e",
  measurementId: "G-WF5VRRVHCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);