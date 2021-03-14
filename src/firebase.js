import firebase from 'firebase';


const firebaseConfig = {
	apiKey: 'AIzaSyC5z5I-yxXJLPfVXqxBZKLMa2PtZJjQTFo',
	authDomain: 'coin-app-7ae37.firebaseapp.com',
	projectId: 'coin-app-7ae37',
	storageBucket: 'coin-app-7ae37.appspot.com',
	messagingSenderId: '452634457392',
	appId: '1:452634457392:web:f9dc44f89704f9af37c4f5',
	measurementId: 'G-S0KZ0FLMEJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //Run app on firebase
const db = firebaseApp.firestore(); //run the dB
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
