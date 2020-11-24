import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBeZWwmEwXFo9PTb_HEdJfTpic0wgjC10s",
  authDomain: "movie-list-app-d6d63.firebaseapp.com",
  databaseURL: "https://movie-list-app-d6d63.firebaseio.com",
  projectId: "movie-list-app-d6d63",
  storageBucket: "movie-list-app-d6d63.appspot.com",
  messagingSenderId: "294880965749",
  appId: "1:294880965749:web:6dfa71ee02a3bbd315f43c",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
