import  firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBed5u_a54OOyXE49Uuv1g6Qkd6rSxG54g",
  authDomain: "my-gram-2ce4c.firebaseapp.com",
  projectId: "my-gram-2ce4c",
  storageBucket: "my-gram-2ce4c.appspot.com",
  messagingSenderId: "872022897364",
  appId: "1:872022897364:web:f48816edf370216bd6c141",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
