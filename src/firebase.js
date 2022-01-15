// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChU-d1-Kn6mVG9SYnwrUpgYANrpWrFYtk",
  authDomain: "react-firebase-auth-1b444.firebaseapp.com",
  projectId: "react-firebase-auth-1b444",
  storageBucket: "react-firebase-auth-1b444.appspot.com",
  messagingSenderId: "422671593777",
  appId: "1:422671593777:web:155024b7e51a5af9f90010",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { auth, googleAuthProvider, facebookAuthProvider }
