// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9a79IpveLG5YOuKeMGtXRmSLShi8FtI0",
  authDomain: "coin-stalker-8df3d.firebaseapp.com",
  projectId: "coin-stalker-8df3d",
  storageBucket: "coin-stalker-8df3d.appspot.com",
  messagingSenderId: "767741721014",
  appId: "1:767741721014:web:e1a8e36fcc8ace90b36917",
  measurementId: "G-NYCY2WJGPG",
  databaseURL:"https://coin-stalker-8df3d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);