// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJsfLgJq9m5S5zSMRdU34RzZ99chGusI",
  authDomain: "math-game-e102a.firebaseapp.com",
  projectId: "math-game-e102a",
  storageBucket: "math-game-e102a.firebasestorage.app",
  messagingSenderId: "355583661473",
  appId: "1:355583661473:web:35957b4891e8886d6da7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);