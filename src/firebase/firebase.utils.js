import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwRGhSyZ-8Lzv3obJbjbD2Yy-aK9-9EhQ",
  authDomain: "clothing-db-2c215.firebaseapp.com",
  projectId: "clothing-db-2c215",
  storageBucket: "clothing-db-2c215.appspot.com",
  messagingSenderId: "1074673898120",
  appId: "1:1074673898120:web:c7a9344e043dee76dcc53d",
  measurementId: "G-3DMJBHPSNM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;