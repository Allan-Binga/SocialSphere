// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa5QF83QOWLToUN548dK2GlEjPK6-m10Y",
  authDomain: "facebookclone-201e1.firebaseapp.com",
  projectId: "facebookclone-201e1",
  storageBucket: "facebookclone-201e1.appspot.com",
  messagingSenderId: "786029452466",
  appId: "1:786029452466:web:49df97430db5bb4efefdab",
  measurementId: "G-RGRTRP3PEE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
