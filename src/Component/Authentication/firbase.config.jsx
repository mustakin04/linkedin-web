// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNFYZtme3p_hqOgCeZhiWPa4UsfamyYVk",
  authDomain: "linkekin-web.firebaseapp.com",
  projectId: "linkekin-web",
  storageBucket: "linkekin-web.firebasestorage.app",
  messagingSenderId: "383432222236",
  appId: "1:383432222236:web:e27769fe189a8cdb8761d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig