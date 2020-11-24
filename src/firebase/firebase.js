import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeZWwmEwXFo9PTb_HEdJfTpic0wgjC10s",
  authDomain: "movie-list-app-d6d63.firebaseapp.com",
  databaseURL: "https://movie-list-app-d6d63.firebaseio.com",
  projectId: "movie-list-app-d6d63",
  storageBucket: "movie-list-app-d6d63.appspot.com",
  messagingSenderId: "294880965749",
  appId: "1:294880965749:web:6dfa71ee02a3bbd315f43c",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

firebase
  .auth()
  .signInWithPopup(provider)
  .then(function (result) {
    var token = result.credential.accessToken;
    var user = result.user;
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
