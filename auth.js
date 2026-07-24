// Firebase SDK imports

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
}
from
    "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyDjphjLqroZPQH40tRRGYkFHLacJWMcRE4",

    authDomain: "cybersecurity-hub-7ca88.firebaseapp.com",

    projectId: "cybersecurity-hub-7ca88",

    storageBucket: "cybersecurity-hub-7ca88.firebasestorage.app",

    messagingSenderId: "1056521546932",

    appId: "1:1056521546932:web:f07110199788b7b4b53be1",

    measurementId: "G-9YN5THR9RL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


// REGISTER

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const email =
                document.getElementById("email").value;


            const password =
                document.getElementById("password").value;


            const confirmPassword =
                document.getElementById("confirmPassword").value;


            const message =
                document.getElementById("registerMessage");


            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                return;

            }


            try {

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


                message.textContent =
                    "Account created successfully!";


                setTimeout(function () {

                    window.location.href =
                        "login.html";

                }, 1500);


            } catch (error) {

                message.textContent =
                    error.message;

            }

        }

    );

}


// LOGIN

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                document.getElementById("email").value;


            const password =
                document.getElementById("password").value;


            const message =
                document.getElementById("loginMessage");


            try {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


                message.textContent =
                    "Login successful!";


                setTimeout(function () {

                    window.location.href =
                        "index.html";

                }, 1000);


            } catch (error) {

                message.textContent =
                    error.message;

            }

        }

    );

}


// GOOGLE LOGIN

const googleLoginBtn =
    document.getElementById("googleLoginBtn");


if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
        "click",
        async function () {

            try {

                await signInWithPopup(
                    auth,
                    googleProvider
                );


                window.location.href =
                    "index.html";


            } catch (error) {

                const message =
                    document.getElementById("loginMessage");


                message.textContent =
                    error.message;

            }

        }

    );

}