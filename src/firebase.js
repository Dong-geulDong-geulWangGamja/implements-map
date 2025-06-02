import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_API_KEY,
  authDomain: process.env.REACT_APP_DB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_DATABASE_URL,
  projectId: process.env.REACT_APP_DB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DB_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_DB_APP_ID,
  measurementId: process.env.REACT_APP_DB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
export const db = getDatabase(app);
