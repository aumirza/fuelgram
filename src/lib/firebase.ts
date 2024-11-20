import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC7lXOBJ17jrWfS5C2z1cfqpPQJX9BfTvY",
  authDomain: "fuelgram-acb5e.firebaseapp.com",
  projectId: "fuelgram-acb5e",
  storageBucket: "fuelgram-acb5e.appspot.com",
  messagingSenderId: "432822102072",
  appId: "1:432822102072:web:a9e1e72ba8ed384f9b1ecd",
};

const firebaseApp = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebaseApp);

export { firebaseApp, FieldValue };
