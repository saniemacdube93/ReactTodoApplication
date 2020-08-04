//const firebaseConfig = {
  //  apiKey: "AIzaSyAga8e1zqNM9QJfNg0m0cOURj5zfWXntME",
    //authDomain: "todo-app-cp-533bb.firebaseapp.com",
    //databaseURL: "https://todo-app-cp-533bb.firebaseio.com",
    //projectId: "todo-app-cp-533bb",
    //storageBucket: "todo-app-cp-533bb.appspot.com",
    //messagingSenderId: "8710813631",
    //appId: "1:8710813631:web:d80d1cd4c747e58fed930a",
    //measurementId: "G-T0Q6KTLE09"
  //};

  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAga8e1zqNM9QJfNg0m0cOURj5zfWXntME",
  authDomain: "todo-app-cp-533bb.firebaseapp.com",
  databaseURL: "https://todo-app-cp-533bb.firebaseio.com",
  projectId: "todo-app-cp-533bb",
  storageBucket: "todo-app-cp-533bb.appspot.com",
  messagingSenderId: "8710813631",
  appId: "1:8710813631:web:d80d1cd4c747e58fed930a",
  measurementId: "G-T0Q6KTLE09"

  });


  const db = firebaseApp.firestore();
  
  export default db;