import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
const config = {
    apiKey : "AIzaSyDCCE66IqYOlqBoK2siBbYFlhL0ORyDPWo",
        authDomain: "ecom-db-6c1ab.firebaseapp.com",
    projectId: "ecom-db-6c1ab",
    storageBucket: "ecom-db-6c1ab.appspot.com",
    messagingSenderId: "769353357459",
    appId: "1:769353357459:web:f658fa3653884237e75566",
};

export const createUSerProfileDocument = async (userAuth,additionalData)=>{
if(!userAuth)return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
if(!snapShot.exists){
const {displayName,email}=userAuth;
const createdAt = new Date();

try{
    await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

    })
}
catch (error){
console.log('error creating user',error.message);
}

}

return userRef;
}





firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();
 const provider =new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt:'select_account'});
 export const signInWithGoogle=()=>auth.signInWithPopup(provider);

 export default firebase;
