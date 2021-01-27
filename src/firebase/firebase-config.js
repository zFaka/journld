import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDy0NWLVYiUjEah_aEykit_LLmZqyJ7n9M",
  authDomain: "react-app-cursos-76a46.firebaseapp.com",
  projectId: "react-app-cursos-76a46",
  storageBucket: "react-app-cursos-76a46.appspot.com",
  messagingSenderId: "232647426404",
  appId: "1:232647426404:web:9ad6c4b84542f98865ba71"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db, 
  googleAuthProvider, 
  firebase
}
