import {initializeApp} from 'firebase'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBSv6ye_aob6ign_j_RV9o0_sKvcrLHBpU",
  authDomain: "project3-808f1.firebaseapp.com",
  databaseURL: "https://project3-808f1.firebaseio.com",
  projectId: "project3-808f1",
  storageBucket: "project3-808f1.appspot.com",
  messagingSenderId: "291714529525"
});
// firebase.initializeApp(config);});
export const db = firebaseApp.database();
export const recipesRef = db.ref('recipes');
export const storageRef = firebaseApp.storage().ref().child("images");