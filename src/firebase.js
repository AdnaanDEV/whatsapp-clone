import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZEtRZGMTadIyMWwZJA0zb2wb9LtDmriA",
    authDomain: "whats-app-clone-81543.firebaseapp.com",
    databaseURL: "https://whats-app-clone-81543.firebaseio.com",
    projectId: "whats-app-clone-81543",
    storageBucket: "whats-app-clone-81543.appspot.com",
    messagingSenderId: "982085142836",
    appId: "1:982085142836:web:00c8a35024d7b6c9673d61",
    measurementId: "G-SZ3N9CPE5Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider} ;
  export default db ;
