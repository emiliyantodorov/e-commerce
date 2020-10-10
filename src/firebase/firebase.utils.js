import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC3p6R1yGHlokX5iaki-7COMGAeHr901q4",
    authDomain: "react-shop-a6f5e.firebaseapp.com",
    databaseURL: "https://react-shop-a6f5e.firebaseio.com",
    projectId: "react-shop-a6f5e",
    storageBucket: "react-shop-a6f5e.appspot.com",
    messagingSenderId: "659865888528",
    appId: "1:659865888528:web:2a7e5258d3c41c288fa795"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase