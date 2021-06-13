import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaH9Ojx7Bq47tJ1P_KO7rUZNAGExYmIC0",
    authDomain: "clothing-db-94125.firebaseapp.com",
    projectId: "clothing-db-94125",
    storageBucket: "clothing-db-94125.appspot.com",
    messagingSenderId: "295787063863",
    appId: "1:295787063863:web:f2f8867579ea07c7546db2",
    measurementId: "G-81LRHFWR5L"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;