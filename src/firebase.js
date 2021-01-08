import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_XfSRmzXczQBo3ttQH-kR0XxP2NiIlow",
  authDomain: "sam-befdc.firebaseapp.com",
  databaseURL: "https://sam-befdc.firebaseio.com",
  projectId: "sam-befdc",
  storageBucket: "sam-befdc.appspot.com",
  messagingSenderId: "408906018074",
  appId: "1:408906018074:web:9cc0a81a25271fec3f90a3",
  measurementId: "G-H7RVVRK8Z1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
