import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyDb4V5EuLVO8UWgbtF5kOvJdKethY3dKA0",
    authDomain: "crown-db-26b87.firebaseapp.com",
    databaseURL: "https://crown-db-26b87.firebaseio.com",
    projectId: "crown-db-26b87",
    storageBucket: "crown-db-26b87.appspot.com",
    messagingSenderId: "531085110982",
    appId: "1:531085110982:web:dd27ffa326913ba991f1c7"
  };

  firebase.initializeApp(config);

  //exporting auth and firestore
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//In order to login using Gmail we use signInWithPopup method with the provider for Google Auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
