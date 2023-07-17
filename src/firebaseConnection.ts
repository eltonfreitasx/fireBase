import { initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7daUzFuXY-2OiN8ySkxyC2XQtXMZtDEw",
  authDomain: "cursotest-eb2c7.firebaseapp.com",
  projectId: "cursotest-eb2c7",
  storageBucket: "cursotest-eb2c7.appspot.com",
  messagingSenderId: "363846614867",
  appId: "1:363846614867:web:e7360344b205689f60aba6",
  measurementId: "G-CRMMVREQ8F"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth }