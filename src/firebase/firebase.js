import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxbV58pMXsxmhbptJWcZXTxJcOiC2ZRAs",
  authDomain: "linkedin-clone-d5b2c.firebaseapp.com",
  projectId: "linkedin-clone-d5b2c",
  storageBucket: "linkedin-clone-d5b2c.appspot.com",
  messagingSenderId: "204861248360",
  appId: "1:204861248360:web:b601f9e9c9a018db15bcdd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
