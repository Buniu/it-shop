import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyDcgSPgsC8f4YJgVcR6W5xOnN63jr6yyf8",
    authDomain: "it-shop-bbe17.firebaseapp.com",
    projectId: "it-shop-bbe17",
    storageBucket: "it-shop-bbe17.appspot.com",
    messagingSenderId: "362904796263",
    appId: "1:362904796263:web:b9a79145ffce518ef768c2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName,email} = userAuth
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    }catch (e) {
      console.log(`error creating the user: ${e}`)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInUserWithEmailandPassword = async (email,password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)