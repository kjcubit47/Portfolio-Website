// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndoBkB_4h-MC1QO1yDq5Ce60N5IZQYxA",
  authDomain: "kylecubitwebsite.firebaseapp.com",
  projectId: "kylecubitwebsite",
  storageBucket: "kylecubitwebsite.appspot.com",
  messagingSenderId: "1033197888539",
  appId: "1:1033197888539:web:1925afb3444d9bd20244be",
  measurementId: "G-RH9CBJR6FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
