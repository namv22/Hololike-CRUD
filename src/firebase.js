import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB-L8GXvQcOF_fMBvnToMhXaOBRERDPfRA',
  authDomain: 'hololike-vue.firebaseapp.com',
  databaseURL: 'https://hololike-vue.firebaseio.com',
  projectId: 'hololike-vue',
  storageBucket: 'hololike-vue.appspot.com',
  messagingSenderId: '848888686842',
  appId: '1:848888686842:web:78142b28d110706c988143'
});

export const db = firebaseApp.firestore();