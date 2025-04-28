// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCt87ZH6FetUVKZAxOaqF5mBpZuUKEFuOw",
  authDomain: "react-app-873a3.firebaseapp.com",
  projectId: "react-app-873a3",
  storageBucket: "react-app-873a3.firebasestorage.app",
  messagingSenderId: "21312315599",
  appId: "1:21312315599:web:95279b61b4f1a3c2e1d7ba",
  measurementId: "G-F1ZFHESKGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);