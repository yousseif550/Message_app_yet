
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDAkEg8XPV6ZeUUSZzJk2FrgZOUBVcwvUM",
    authDomain: "yetapp-61b81.firebaseapp.com",
    projectId: "yetapp-61b81",
    storageBucket: "yetapp-61b81.appspot.com",
    messagingSenderId: "228582560472",
    appId: "1:228582560472:web:99c03ef868807c46c73dad",
    measurementId: "G-QK9SD78249"
};

firebase.initializeApp(firebaseConfig);

export default firebase;