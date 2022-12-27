import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_XmQ_v7FH2fRljGhuyEdfL8uIxVvSXL4",
  authDomain: "crwn-clothing-db-63678.firebaseapp.com",
  projectId: "crwn-clothing-db-63678",
  storageBucket: "crwn-clothing-db-63678.appspot.com",
  messagingSenderId: "988722028675",
  appId: "1:988722028675:web:f7359715b4f05c28a87bb6",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Auth
export const auth = getAuth();

// Sign In Methods
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// DB

export const db = getFirestore();

// Inserting products categories into collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });

  await batch.commit();
  console.log('done')
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  // check if exist
  // doc instance and pass in the firestore database, the collection, and the UID
  const userDocRef = doc(db, "users", userAuth.uid);

  // Try to getDoc from userRef
  const userSnapshop = await getDoc(userDocRef);

  // Create user document
  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (err) {
      console.log("error creatng the user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth, callback);