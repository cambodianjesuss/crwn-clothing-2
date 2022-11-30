import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_XmQ_v7FH2fRljGhuyEdfL8uIxVvSXL4",
  authDomain: "crwn-clothing-db-63678.firebaseapp.com",
  projectId: "crwn-clothing-db-63678",
  storageBucket: "crwn-clothing-db-63678.appspot.com",
  messagingSenderId: "988722028675",
  appId: "1:988722028675:web:f7359715b4f05c28a87bb6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
