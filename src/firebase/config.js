import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzR2BKT3KXZn_BVj2C0b6j848GMp5HyA",
  authDomain: "e-learning-dbbac.firebaseapp.com",
  projectId: "e-learning-dbbac",
  storageBucket: "e-learning-dbbac.appspot.com",
  messagingSenderId: "975024195855",
  appId: "1:975024195855:web:09a6fb2d53198cf926967a",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };