import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ6rNyTrZfnXXnw44cN7PEKpG_muKALtA",
  authDomain: "coffee-app-81eef.firebaseapp.com",
  projectId: "coffee-app-81eef",
  storageBucket: "coffee-app-81eef.appspot.com",
  messagingSenderId: "394248365020",
  appId: "1:394248365020:web:e05518741155cf59812519"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);