// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app"
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqEqNfBhXMwIRL3ZZDJ8kztHJX18i_iB8",
  authDomain: "hospital-companion-34edd.firebaseapp.com",
  databaseURL: "https://hospital-companion-34edd-default-rtdb.firebaseio.com",
  projectId: "hospital-companion-34edd",
  storageBucket: "hospital-companion-34edd.appspot.com",
  messagingSenderId: "272660850097",
  appId: "1:272660850097:web:6036825cdf57957a1e8990",
  measurementId: "G-11H4R9F4QE"
};

// Initialize Firebase
if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig);
  
}
const analytics = getAnalytics(app);
export default firebase;