import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVq83_QtTqwviSpf-XH99PXnz_kMGBzeo",
    authDomain: "facebook-cloning.firebaseapp.com",
    databaseURL: "https://facebook-cloning.firebaseio.com",
    projectId: "facebook-cloning",
    storageBucket: "facebook-cloning.appspot.com",
    messagingSenderId: "485512491029",
    appId: "1:485512491029:web:2035e85e509aa0d7239e1c",
    measurementId: "G-EXQYL3BRLB"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;