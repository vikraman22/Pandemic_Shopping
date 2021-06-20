  
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPGCpsLB1BH5B8wHp15LnT0DtLS1UB-U",
  authDomain: "pandemic-v.firebaseapp.com",
  projectId: "pandemic-v",
  storageBucket: "pandemic-v.appspot.com",
  messagingSenderId: "591979245527",
  appId: "1:591979245527:web:f6a14075bbae04ed9a6592",
  measurementId: "G-8TDE82S6N6"
};


firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()
  
  
  
  export { projectAuth, projectStorage, projectFirestore }