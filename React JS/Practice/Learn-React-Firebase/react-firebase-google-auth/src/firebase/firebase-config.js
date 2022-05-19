// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const name = result.user.displayName;
			const email = result.user.email;
			const profilePic = result.user.photoURL;

			localStorage.setItem("name", name);
			localStorage.setItem("email", email);
			localStorage.setItem("dp", profilePic);
		})
		.catch((err) => {
			console.log(err);
		});
};
