import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAuuaAseUrrOHkUBZSMSdRoUzRHJbEzVAk",
  authDomain: "projeto-40-e2b64.firebaseapp.com",
  databaseURL: "https://projeto-40-e2b64-default-rtdb.firebaseio.com",
  projectId: "projeto-40-e2b64",
  storageBucket: "projeto-40-e2b64.appspot.com",
  messagingSenderId: "795782604525",
  appId: "1:795782604525:web:2a444f126bdf99e19e4ee4"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
