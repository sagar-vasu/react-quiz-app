import firebase from 'firebase/app'
import'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyD4Qw9KZiGIsA4rsvfZT3PNOMoBHCTFXh8",
    authDomain: "quiz-app-1f780.firebaseapp.com",
    databaseURL: "https://quiz-app-1f780.firebaseio.com",
    projectId: "quiz-app-1f780",
    storageBucket: "",
    messagingSenderId: "92314454447",
    appId: "1:92314454447:web:e070fa8a42fae413"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
 export  {
    firebaseApp,
    provider
 }



