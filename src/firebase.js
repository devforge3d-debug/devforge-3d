import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcvAySEO9ACV4Yin_3vE-lLQZ7M6Nzh7E",
  authDomain: "devforge3d-a414d.firebaseapp.com",
  projectId: "devforge3d-a414d",
  storageBucket: "devforge3d-a414d.firebasestorage.app",
  messagingSenderId: "285640551917",
  appId: "1:285640551917:web:b1f70cc6265d71551e0be4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);