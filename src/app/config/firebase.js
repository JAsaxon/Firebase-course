import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCz4O0V_bLiqprkpmFjaYxbobN8FRJ36rk",
  authDomain: "social-bc567.firebaseapp.com",
  projectId: "social-bc567",
  storageBucket: "social-bc567.appspot.com",
  messagingSenderId: "595240749561",
  appId: "1:595240749561:web:7b1bc8fe8f2666ffb0d528",
  measurementId: "G-Q7VSTX9RH9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()