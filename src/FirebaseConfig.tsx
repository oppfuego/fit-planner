import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvqW2-4JUInPQvstIE3fF8Z_o55tFYa9M",
    authDomain: "fit-planner-e8b69.firebaseapp.com",
    projectId: "fit-planner-e8b69",
    storageBucket: "fit-planner-e8b69.appspot.com",
    messagingSenderId: "685784524713",
    appId: "1:685784524713:web:ee2dad55af78af3ff486b8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;