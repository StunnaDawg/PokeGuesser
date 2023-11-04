// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getAuth, browserLocalPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwVKDMyjQcDN4Mpe6oYfW675VYgaSV7xM",
  authDomain: "pokeguesser-a0381.firebaseapp.com",
  projectId: "pokeguesser-a0381",
  storageBucket: "pokeguesser-a0381.appspot.com",
  messagingSenderId: "1096066107860",
  appId: "1:1096066107860:web:49c8c141a7187988462e41",
  measurementId: "G-N01XGLG1QQ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
FIREBASE_AUTH.setPersistence(browserLocalPersistence);
export const db = getFirestore(FIREBASE_APP)