// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCcHsxnYSkiVDhqNSdmwBphTDglk7Tf3ZY",
	authDomain: "fir-react-crud-cbad4.firebaseapp.com",
	projectId: "fir-react-crud-cbad4",
	storageBucket: "fir-react-crud-cbad4.appspot.com",
	messagingSenderId: "685339670597",
	appId: "1:685339670597:web:2b9f7ba4bac365f7700b2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
