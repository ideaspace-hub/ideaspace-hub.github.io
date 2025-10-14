// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBbTWt0dpw7w6mFJB2yF0olTCh2mBDwbn8",
  authDomain: "collabspace-6d0af.firebaseapp.com",
  projectId: "collabspace-6d0af",
  storageBucket: "collabspace-6d0af.appspot.com",
  messagingSenderId: "19918134739",
  appId: "1:19918134739:web:3c3e2046024466dd2ea326"
};

// Initialize Firebase App only if it's not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Signup function (removed as it's now handled directly in signup.html)
/* function signupUser() {
  ...
} */

// Login function (removed as it's now handled directly in login.html)
/* function loginUser() {
  ...
} */