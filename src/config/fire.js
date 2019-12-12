import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAOwllR-PxNodHPdF5YnB1UXaX-bXAq4rY",
    authDomain: "f1app-fc856.firebaseapp.com",
    databaseURL: "https://f1app-fc856.firebaseio.com",
    projectId: "f1app-fc856",
    storageBucket: "f1app-fc856.appspot.com",
    messagingSenderId: "334892192510",
    appId: "1:334892192510:web:86e4b6b62b124fad92cbaf",
    measurementId: "G-XSRVQCHX1X"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;