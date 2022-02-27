import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/storage';  
const firebaseConfig = {
  apiKey: "AIzaSyB9-zmFWHqn6irrPssUH1AeBRNbU8W54fU",
  authDomain: "disney-plus2-9f37f.firebaseapp.com",
  projectId: "disney-plus2-9f37f",
  storageBucket: "disney-plus2-9f37f.appspot.com",
  messagingSenderId: "483886695792",
  appId: "1:483886695792:web:adf017b5cb63661716fbb5",
  measurementId: "G-G4GWCEP7XY"
};



  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  
  export { auth, provider };
export default db;
