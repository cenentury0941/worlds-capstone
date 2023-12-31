import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { addUser } from "./db";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "./AuthLandscape.css";

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function SignUp()
{
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ passwordRepeat , setPasswordRepeat ] = useState("");


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
    
    const signUpUser = async () => {

        if(!validateEmail(email))
        {
            return;
        }

        if( password !== passwordRepeat )
        {
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) =>  {
          // Signed in 

          var success = await addUser(email);

          if( success )
          {
            const user = userCredential.user;
            navigate( "/worlds/marketplace/dashboard" )  
          }


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log( errorCode , errorMessage );
        });
  

    }

    const navigate = useNavigate();

    const SignUpClicked = (event) => {
    }

    return (
        <div className="Background">
        <div className="AuthContainer">
            <h1>Sign Up</h1>
            <TextField onChange={ (event) => { setEmail(event.target.value) } } id="outlined-basic" label="Username" variant="outlined" sx = {{ width : "60%" }} />
            <TextField onChange={ (event) => { setPassword(event.target.value) } }id="outlined-basic" label="Password" type="password" variant="outlined"  sx = {{ width : "60%" }} />
            <TextField onChange={ (event) => { setPasswordRepeat(event.target.value) } }id="outlined-basic" label="Re-enter Password" type="password" variant="outlined"  sx = {{ width : "60%" }} />
            <Button onClick={signUpUser} type="submit" variant="outlined" sx={ { marginTop: "3%" , borderRadius: 28 , height: "12%" , width: "25%", boxShadow: "0px 0px 1vh 0.025vh #00000000" , backgroundColor: "#fff" } }>Sign Up</Button>
        </div>
    </div>
    )
}

export default SignUp;