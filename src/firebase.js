import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIIrnugSJVuRPSCmPUrDbMACiSVDsV-f4",
    authDomain: "rokas-facebook-app.firebaseapp.com",
    projectId: "rokas-facebook-app",
    storageBucket: "rokas-facebook-app.appspot.com",
    messagingSenderId: "935126950289",
    appId: "1:935126950289:web:b6876e8e5cb3b635f4ba30",
    measurementId: "G-FS4K28SQ2S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// setting the providers, that we want the Google or etc login servers
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
// to use normally
export default db;
