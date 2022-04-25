import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC5twzXjdJV3TmlcZiodl4aG3KFnrex0_g",
    authDomain: "unichat-2216d.firebaseapp.com",
    projectId: "unichat-2216d",
    storageBucket: "unichat-2216d.appspot.com",
    messagingSenderId: "1008962285184",
    appId: "1:1008962285184:web:3a2911564c1d5e5d9d4065",
    measurementId: "G-VV8PTGGRL6"
  }).auth();