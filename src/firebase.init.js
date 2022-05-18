// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeWseOpq15yiQmBn1XkFB5GZpzHkEqzZY",
    authDomain: "to-do-list-fb6db.firebaseapp.com",
    projectId: "to-do-list-fb6db",
    storageBucket: "to-do-list-fb6db.appspot.com",
    messagingSenderId: "262677638972",
    appId: "1:262677638972:web:be18f7ea9bcc0c5acff839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;