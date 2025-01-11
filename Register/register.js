import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDaW2MhrmRKQQebyTZvqBK38OLzj76B5dU",
    authDomain: "bake-my-day-c18a0.firebaseapp.com",
    projectId: "bake-my-day-c18a0",
    storageBucket: "bake-my-day-c18a0.firebasestorage.app",
    messagingSenderId: "484070995705",
    appId: "1:484070995705:web:83f77d4057da68ad3c9428"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

const signUp = document.getElementById('register')
register.addEventListener('click', (event)=>{
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
        const userData={
            fullName: fullName,
            email: email,
            address: address,
        };
        showMessage('Account Created Succesfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode=='auth/email-already-in-use') {
            showMessage('Email Address Already Exists!', 'signUpMessage');
        }
        else {
            showMessage('unable to create user', 'signUpMessage');
        }
    })
})

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='home.html';
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode==='auth/invalid-credential') {
            showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
            showMessage('Account does not Exist', 'signInMessage');
        }
        
    })
})
    