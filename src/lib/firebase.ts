// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDtj5cyECAxgUxMhRQXxC1HbmVoP7thwjo',
	authDomain: 'polarchancom.firebaseapp.com',
	projectId: 'polarchancom',
	storageBucket: 'polarchancom.appspot.com',
	messagingSenderId: '1034926265848',
	appId: '1:1034926265848:web:4a33715f063c523ebaf20d',
	measurementId: 'G-MVKYZ8MK5V'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
