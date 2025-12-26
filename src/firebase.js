import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBIGf3_NNiqaDgBunKRaKlRDw3e1QajmxU",
  authDomain: "portfolio-f2eed.firebaseapp.com",
  databaseURL: "https://portfolio-f2eed-default-rtdb.firebaseio.com",
  projectId: "portfolio-f2eed",
  storageBucket: "portfolio-f2eed.firebasestorage.app",
  messagingSenderId: "451656784672",
  appId: "1:451656784672:web:0384c1746b49d65d929545",
  measurementId: "G-GJX670YGJV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
