import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
    

const firebaseConfig = {
    apiKey: "AIzaSyAIN2TF5BrhNOvobAQFg0llhXsTXRRJwXo",
    authDomain: "worlds-capstone.firebaseapp.com",
    projectId: "worlds-capstone",
    storageBucket: "worlds-capstone.appspot.com",
    messagingSenderId: "245373342483",
    appId: "1:245373342483:web:3c645c460d222d0b76c0e6",
    measurementId: "G-P3CNWR4SD1"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth }