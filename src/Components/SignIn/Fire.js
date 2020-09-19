import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC1QvDmcgJmaQwRFNEnrlpoNO_TH25ZYyo",
    authDomain: "my-website-v2-7cd44.firebaseapp.com",
    databaseURL: "https://my-website-v2-7cd44.firebaseio.com",
    projectId: "my-website-v2-7cd44",
    storageBucket: "my-website-v2-7cd44.appspot.com",
    messagingSenderId: "363391922778",
    appId: "1:363391922778:web:530c8a70cb6dfb66aede63"
}
const fire = firebase.initializeApp(firebaseConfig);
export default fire; 