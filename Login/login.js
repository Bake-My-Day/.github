import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"

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
  const auth = getAuth(app);
  

  // function for showing message
  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

// Event listener for login button
const signInButton = document.getElementById('submitSignIn');
signInButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        showMessage('Login is successful', 'signInMessage');
        window.location.href = 'home.html';
    } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
            showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
            showMessage('Error occurred: ' + error.message, 'signInMessage');
        }
    }
});