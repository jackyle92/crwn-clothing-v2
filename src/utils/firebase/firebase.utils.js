import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-u25WG6vHqGUulomLfh44w2LyjJVCbG8",
  authDomain: "jacky-lee-932bd.firebaseapp.com",
  projectId: "jacky-lee-932bd",
  storageBucket: "jacky-lee-932bd.appspot.com",
  messagingSenderId: "599579001265",
  appId: "1:599579001265:web:69ac0cba04e167e3127d90",
  measurementId: "G-ZEVNHML6XE",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

// create firestore database
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalField = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef: ", userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    let { displayName, email } = userAuth;
    if (!displayName) {
      displayName = email;
    }
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalField,
      });
    } catch (error) {
      console.log("error when setting user: ", error.getmessage());
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
