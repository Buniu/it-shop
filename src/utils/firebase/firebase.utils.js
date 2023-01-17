import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
 
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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'

  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)