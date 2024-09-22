// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKM3nM19Q9dLTbOOT2QhDSeUI7D53dNLA",
  authDomain: "linkedin-clone-998fd.firebaseapp.com",
  projectId: "linkedin-clone-998fd",
  storageBucket: "linkedin-clone-998fd.appspot.com",
  messagingSenderId: "649648850692",
  appId: "1:649648850692:web:b518c7adcdade7164df251",
  measurementId: "G-QDVEKFG6WK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
