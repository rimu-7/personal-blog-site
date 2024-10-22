// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCITeZQhdRsRGxj4ci6YEr52Bw4ThrL5ws",
  authDomain: "myblog7-ccfc7.firebaseapp.com",
  projectId: "myblog7-ccfc7",
  storageBucket: "myblog7-ccfc7.appspot.com",
  messagingSenderId: "1073155171705",
  appId: "1:1073155171705:web:bc9b339c95ff7ee733fba8",
  measurementId: "G-Y114X722H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
