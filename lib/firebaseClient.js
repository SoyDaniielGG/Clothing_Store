// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrU7zVad5x289X9AdrCJcjZSJsWVh03Xs",
  authDomain: "clothing-store-8688d.firebaseapp.com",
  projectId: "clothing-store-8688d",
  storageBucket: "clothing-store-8688d.firebasestorage.app",
  messagingSenderId: "1049121583184",
  appId: "1:1049121583184:web:759d482bd34e6831ace155"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
 
export default app;