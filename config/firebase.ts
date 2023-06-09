// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3B929I6fp5a7daX86yC6kA5y_spXWba4",
  authDomain: "whatsapp-133f6.firebaseapp.com",
  projectId: "whatsapp-133f6",
  storageBucket: "whatsapp-133f6.appspot.com",
  messagingSenderId: "285598727674",
  appId: "1:285598727674:web:169e17e0d216ad43b37843"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
