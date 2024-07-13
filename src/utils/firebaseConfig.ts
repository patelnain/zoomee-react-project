import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_T6858T_E2GqrG7JxNlFUfDiYeZEo4zc",
  authDomain: "zoomee-84b33.firebaseapp.com",
  projectId: "zoomee-84b33",
  storageBucket: "zoomee-84b33.appspot.com",
  messagingSenderId: "424488888212",
  appId: "1:424488888212:web:264c7fa5da9b8859a5d181",
  measurementId: "G-XSNPB55E2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");