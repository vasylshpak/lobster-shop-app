import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfa_2AeZmjfma__ASyCnGqf6Pt4QbacFo",
    authDomain: "catch-of-the-day-vasyl.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-vasyl.firebaseio.com"
});

const base =  Rebase.createClass(firebaseApp.database());

export{ firebaseApp };

export default base;