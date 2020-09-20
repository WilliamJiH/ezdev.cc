import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCRRJfbHjQ67e7l0iYfD_XzxMR-P7WJ6NM",
  authDomain: "my-website-v2-e6874.firebaseapp.com",
  databaseURL: "https://my-website-v2-e6874.firebaseio.com",
  projectId: "my-website-v2-e6874",
  storageBucket: "my-website-v2-e6874.appspot.com",
  messagingSenderId: "941409413931",
  appId: "1:941409413931:web:cdbbafbd37058c91d7736e"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire; 