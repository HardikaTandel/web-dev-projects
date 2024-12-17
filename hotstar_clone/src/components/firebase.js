// Import the necessary functions from Firebase v9
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCKShrNLFrhyGIsKkkto5rQK4ZsY38Ey4s",
    authDomain: "hotstar-clone-d5c0b.firebaseapp.com",
    projectId: "hotstar-clone-d5c0b",
    storageBucket: "hotstar-clone-d5c0b.appspot.com",
    messagingSenderId: "828583405693",
    appId: "1:828583405693:web:d4792f2160f00bc00ce914",
    measurementId: "G-QE9HFN727L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
