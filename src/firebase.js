import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBF6vCVFahIL9Qd2Xs1nMpUh1rV_RxnR_k",
    authDomain: "webprog-3a508.firebaseapp.com",
    databaseURL: "https://webprog-3a508-default-rtdb.firebaseio.com",
    projectId: "webprog-3a508",
    storageBucket: "webprog-3a508.appspot.com",
    messagingSenderId: "3832765383",
    appId: "1:3832765383:web:6f440a21686481d530d7e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
