// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ecZLV0s22_OV4CuFcMtcshAPD3G2EJE",
  authDomain: "fir-66721.firebaseapp.com",
  projectId: "fir-66721",
  storageBucket: "fir-66721.appspot.com",
  messagingSenderId: "633918822807",
  appId: "1:633918822807:web:192811c4b28552d5440cd2",
  measurementId: "G-C2MZN0JFRX"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 export { db, auth };
