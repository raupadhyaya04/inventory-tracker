// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnKfmfPshrDBtjtBHkCHXOTejj8Urd5aY",
  authDomain: "inventory-tracker-5e9b7.firebaseapp.com",
  projectId: "inventory-tracker-5e9b7",
  storageBucket: "inventory-tracker-5e9b7.appspot.com",
  messagingSenderId: "466230841648",
  appId: "1:466230841648:web:bad275da1a0a2bedbd78f5",
  measurementId: "G-D6BHQ77KNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};