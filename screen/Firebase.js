// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey : "AIzaSyBsTrdPUthbCtlQfr_-riDnSWkSycv1wC8" , 
    authDomain : "huyy-780f7.firebaseapp.com" , 
    projectId : "huyy-780f7" , 
    storageBucket : "huyy-780f7.appspot.com" , 
    messagingSenderId : "745528348436" , 
    appId : "1:745528348436:web:a717565bec53829a203c01" , 
    measurementId : "G-JVMM4CN8RZ" 
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };