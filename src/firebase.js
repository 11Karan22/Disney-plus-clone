import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/storage';  
const firebaseConfig = {
  apiKey: "AIzaSyCiqgmhqin1aultfnB3aJp0mwgDv0WGp7o",
  authDomain: "disney-plus-clone-530c1.firebaseapp.com",
  projectId: "disney-plus-clone-530c1",
  storageBucket: "disney-plus-clone-530c1.appspot.com",
  messagingSenderId: "22683230306",
  appId: "1:22683230306:web:094311cd917914c42e313b",
  measurementId: "G-RV8XG5L92W"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  
  export { auth, provider };
export default db;
