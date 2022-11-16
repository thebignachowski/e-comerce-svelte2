// Import the functions you need from the SDKs you need
import firebase from 'firebase/app/dist/index.esm';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClNGYLRVk69ZvqDU4keE3qVdMAPETWN1w",
  authDomain: "curso-svelte-7e47a.firebaseapp.com",
  projectId: "curso-svelte-7e47a",
  storageBucket: "curso-svelte-7e47a.appspot.com",
  messagingSenderId: "110320680613",
  appId: "1:110320680613:web:115a768a9fa3ebcd6cd74c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };

