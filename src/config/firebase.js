
import firebase from "firebase/app";
require('firebase/auth');
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


/*const firebaseConfig = {
  apiKey: "AIzaSyA6Li1lqmCLz8CCVtWKPFCZ0niyQflRX7o",
  authDomain: "bridgetech-advance-project.firebaseapp.com",
  projectId: "bridgetech-advance-project",
  storageBucket: "bridgetech-advance-project.appspot.com",
  messagingSenderId: "347276694492",
  appId: "1:347276694492:web:ddc0009ac7956f061d3519",
};*/

const firebaseConfig = {
  apiKey: "AIzaSyDXYDyDFyCGZm1ukPFjGcgltftOBDeqqPM",
  authDomain: "coworkpay.firebaseapp.com",
  projectId: "coworkpay",
  storageBucket: "coworkpay.appspot.com",
  messagingSenderId: "1087411400971",
  appId: "1:1087411400971:web:b34d3ebc1da344c6e1b20e",
  measurementId: "G-2TF1H866QZ"
};


// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

export const storage = firebase.storage();

export const auth = firebase.auth();

export const static_img = 'https://firebasestorage.googleapis.com/v0/b/bridgetech-advance-project.appspot.com/o/profile_images%2Fprofile.jpg?alt=media&token=b3c94ada-1b08-4834-bbd1-647882c7195a';






