// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe66O2F_QzrqctcUWWT1B-StgldJO5z24",
  authDomain: "myteecha.firebaseapp.com",
  projectId: "myteecha",
  storageBucket: "myteecha.appspot.com",
  messagingSenderId: "238520985095",
  appId: "1:238520985095:web:ea7990a0cd03aafe17aca2",
  measurementId: "G-R643B51MST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export dp instance
const db = getFirestore(app);

export const addPartner = async (table, data) => {
  try {
    const docRef = await addDoc(collection(db, table), data);
    return "Document written with ID: " + docRef.id;
  } catch (e) {
    return "Error adding document: " + e;
  }
};
