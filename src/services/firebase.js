// src/services/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzdBgwB8tfBkXZhKBO04BFjtGnriE0l88",
    authDomain: "chatfy-beff6.firebaseapp.com",
    projectId: "chatfy-beff6",
    storageBucket: "chatfy-beff6.appspot.com",
    messagingSenderId: "629132039665",
    appId: "1:629132039665:web:29e0d148df4af721bce050",
    measurementId: "G-TMB60HPVSH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
