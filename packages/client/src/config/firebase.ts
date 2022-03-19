// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNBGACzF08f2BnFUCWJS5xtgnHUNPSnOM",
  authDomain: "goat-pad.firebaseapp.com",
  projectId: "goat-pad",
  storageBucket: "goat-pad.appspot.com",
  messagingSenderId: "390770819378",
  appId: "1:390770819378:web:c2b8561137a05807cb972b",
  measurementId: "G-ZCX7K31E0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
