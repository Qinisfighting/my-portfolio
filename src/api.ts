import { initializeApp } from "firebase/app";
import {
    getFirestore,
 //   collection,
  //  getDocs,
  } from "firebase/firestore"
  
import { getDatabase } from 'firebase/database';

//import { getStorage } from 'firebase/storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy7r8XY7d0TnssuonjlRR82UiEk00cNmI",
  authDomain: "my-portfolio-da4fb.firebaseapp.com",
  projectId: "my-portfolio-da4fb",
  storageBucket: "my-portfolio-da4fb.appspot.com",
  messagingSenderId: "341777647211",
  appId: "1:341777647211:web:d734529ec3b198523ad32e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
export const db = getFirestore(app);
export const database = getDatabase(app);





