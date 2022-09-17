import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnxYiA7T1GXa_W74JYzam7gYEAnUv4ShQ",
    authDomain: "miniblog-504c2.firebaseapp.com",
    projectId: "miniblog-504c2",
    storageBucket: "miniblog-504c2.appspot.com",
    messagingSenderId: "172056887780",
    appId: "1:172056887780:web:aedc08514d8aefc49487f1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };