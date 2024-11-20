// FirebaseContext.tsx
import { createContext } from "react";
import firebase from "firebase/app";

// Define the correct type for the context value
type FirebaseContextType = {
  firebaseApp: firebase.app.App;
  FieldValue: typeof firebase.firestore.FieldValue;
};

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export default FirebaseContext;
