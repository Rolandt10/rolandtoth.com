import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsCgcpnmQ4Ee5g1SBJIEL9nizU3ENY65U",
  authDomain: "rolandtothcom.firebaseapp.com",
  projectId: "rolandtothcom",
  storageBucket: "rolandtothcom.firebasestorage.app",
  messagingSenderId: "34150530914",
  appId: "1:34150530914:web:a48442135c9b577185763b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
