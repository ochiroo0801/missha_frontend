import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDoQjz9dgWPzLRFd5hXRDkQbXR98q3d-Gw",
  authDomain: "shopy-cf149.firebaseapp.com",
  projectId: "shopy-cf149",
  storageBucket: "shopy-cf149.appspot.com",
  messagingSenderId: "37635872743",
  appId: "1:37635872743:web:47b02d5d38ce8cccdccf42",
  measurementId: "G-08NL7Z5LDW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const auth = firebase.auth();
const authOut = firebase.auth().signOut();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, authOut, googleProvider, facebookProvider };
export default db;
