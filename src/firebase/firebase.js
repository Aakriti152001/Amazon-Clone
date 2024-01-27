import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAp3qC-xMxMEfjqZangzgaTe-iluvitPLU",
  authDomain: "clone-3c3b2.firebaseapp.com",
  projectId: "clone-3c3b2",
  storageBucket: "clone-3c3b2.appspot.com",
  messagingSenderId: "931435066154",
  appId: "1:931435066154:web:98994129376f1f9dba2453",
  measurementId: "G-36XVL94JDG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;