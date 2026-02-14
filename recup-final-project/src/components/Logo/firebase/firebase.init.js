//step-1: firebase setup
//I have looking vite website docs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.VIE_apiKey,
  authDomain: import.meta.VIE_authDomain,
  projectId: import.meta.VIE_projectId,
  storageBucket: import.meta.VIE_storageBucket,
  messagingSenderId: import.meta.VIE_messagingSenderId,
  appId: import.meta.VIE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
