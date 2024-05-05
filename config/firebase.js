import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJKw7CfG1Xl_UHHkEgqHD8E5_ZY_VOuJY",
  authDomain: "contactapp-307c4.firebaseapp.com",
  projectId: "contactapp-307c4",
  storageBucket: "contactapp-307c4.appspot.com",
  messagingSenderId: "181919406441",
  appId: "1:181919406441:web:0e6e3638da04bbf6b8c5f8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

