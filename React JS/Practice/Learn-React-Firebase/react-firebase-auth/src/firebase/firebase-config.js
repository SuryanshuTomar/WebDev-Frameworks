// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBXLeR5EHhMukQ4t-8AxTmEytwmsw5fsNA",
	authDomain: "fir-react-auth-3f8de.firebaseapp.com",
	projectId: "fir-react-auth-3f8de",
	storageBucket: "fir-react-auth-3f8de.appspot.com",
	messagingSenderId: "680135517696",
	appId: "1:680135517696:web:f7eebead7a6f12628c1ae5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
