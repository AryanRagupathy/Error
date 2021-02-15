import {firebase} from '@firebase/app';

require('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyDtDD6sBRGLe8psjSImW7q0GiBZpnbGviY",
  authDomain: "booksanta-fef16.firebaseapp.com",
  projectId: "booksanta-fef16",
  storageBucket: "booksanta-fef16.appspot.com",
  messagingSenderId: "78164632351",
  appId: "1:78164632351:web:b17e1ef1711f654704c62a"
};

  firebase.initializeApp(firebaseConfig);



export default firebase.firestore();