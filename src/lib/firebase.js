import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnwi3aSEyGWMRebLTrur4ga3Ubrq684qI",
  authDomain: "kamui-30e37.firebaseapp.com",
  projectId: "kamui-30e37",
  storageBucket: "kamui-30e37.appspot.com",
  messagingSenderId: "879611576569",
  appId: "1:879611576569:web:6ef156e12505e7e0046228",
  measurementId: "G-WJLL0TFD2Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
