//firebase connect
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC1KMPyDfTXrEac1x_sGdZ_ayZTKnOcSM",
  authDomain: "to-do-list-ac744.firebaseapp.com",
  databaseURL: "https://to-do-list-ac744-default-rtdb.firebaseio.com/",
  projectId: "to-do-list-ac744",
  storageBucket: "to-do-list-ac744.appspot.com",
  messagingSenderId: "265750481628",
  appId: "1:265750481628:web:bd8ed2fa3a9a14e1c98219",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
