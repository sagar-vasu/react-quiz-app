import firebase from 'firebase/app'
import'firebase/auth'


var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
 export  {
    firebaseApp,
    provider
 }



