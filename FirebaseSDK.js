import firebase from 'firebase';
class FirebaseSDK { constructor() { if (!firebase.apps.length) {
 constructor() {
     if (!firebase.apps.length) { 
         firebase.initializeApp ({ 
        authDomain: '<place_holder>',
        databaseURL: 'https://<place_holder/>.firebaseio.com',
        projectId: '<place_holder>',
        storageBucket: '<place_holder>.appspot.com',
        messagingSenderId: '<place_holder>
        });
     }
}
login = async (user, success_callback, failed_callback) =>
    { await firebase
    .auth()
    .sign InWithEmailAndPassword (user.email, user.password)
    .then (success_callback, failed_callback);
    };
}
const firebaseSDK = new Firebase SDK();
export default firebase SDK;
