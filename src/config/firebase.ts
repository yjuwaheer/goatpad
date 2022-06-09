// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: 'AIzaSyDNBGACzF08f2BnFUCWJS5xtgnHUNPSnOM',
//   authDomain: 'goat-pad.firebaseapp.com',
//   projectId: 'goat-pad',
//   storageBucket: 'goat-pad.appspot.com',
//   messagingSenderId: '390770819378',
//   appId: '1:390770819378:web:c2b8561137a05807cb972b',
//   measurementId: 'G-ZCX7K31E0W',
// }

// Test firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8X5Sr2KvJXuVSVLJvN3t7jSKQmts3xyE",
  authDomain: "testapp-d3881.firebaseapp.com",
  projectId: "testapp-d3881",
  storageBucket: "testapp-d3881.appspot.com",
  messagingSenderId: "8869824824",
  appId: "1:8869824824:web:6fe012efc30b0430f619cd",
  measurementId: "G-1YE52QSCCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
