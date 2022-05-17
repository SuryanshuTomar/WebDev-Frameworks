// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBRwOVxoeiZCikiP5Q96CYjjTbrXGpxmko",
	authDomain: "fir-react-crud-27a1d.firebaseapp.com",
	projectId: "fir-react-crud-27a1d",
	storageBucket: "fir-react-crud-27a1d.appspot.com",
	messagingSenderId: "2967840211",
	appId: "1:2967840211:web:ea6f3599ab1394b75c7b26",
	measurementId: "G-EZ6X44YLY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
