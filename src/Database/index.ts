import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD92mmI4mmpEvYFFphHsq8ghgDL_WZ4wV8",
  authDomain: "orturismo-e773b.firebaseapp.com",
  projectId: "orturismo-e773b",
  storageBucket: "orturismo-e773b.appspot.com",
  messagingSenderId: "1077118387568",
  appId: "1:1077118387568:web:4899231f7762013a2cbbb5",
  measurementId: "G-GRCFE7S1XJ",
});

export default firebaseApp;

// const db = getFirestore(firebaseApp);

// async function loadCity(name) {
//   const cityDoc = doc(db, `cities/${name}`);
//   const snapshot = await getDoc(cityDoc);
//   return {
//     id: snapshot.id,
//     ...snapshot.data(),
//   };
// }
