import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfWGXkkS9ovsA5o0Au4bnalQ1EOa7MIzA",
  authDomain: "trip-advisor-ed78f.firebaseapp.com",
  projectId: "trip-advisor-ed78f",
  storageBucket: "trip-advisor-ed78f.appspot.com",
  messagingSenderId: "446260614175",
  appId: "1:446260614175:web:1d15d95e12f9e3e3f3312a",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
