import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
 

const firebaseConfig = {
  apiKey: "AIzaSyD5ECtvb8-AdXcc2Y5qnFWYYiEnMOZluzM",
  authDomain: "furniturewebsite-ba04a.firebaseapp.com",
  projectId: "furniturewebsite-ba04a",
  storageBucket: "furniturewebsite-ba04a.appspot.com",
  messagingSenderId: "333059849371",
  appId: "1:333059849371:web:532fa4d5e7632ac14e1a3e",
  // measurementId: "G-8BPSKME778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth  = getAuth(app);
export const db = getFirestore(app);
export const storage =  getStorage(app);




export default app;