import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBxmeD_X-ItLU_8cSwZjCMHX3DxppBhbXU',
  authDomain: 'reacttestlogin-959a4.firebaseapp.com',
  databaseURL: 'https://reacttestlogin-959a4.firebaseio.com',
  projectId: 'reacttestlogin-959a4',
  storageBucket: 'reacttestlogin-959a4.appspot.com',
  messagingSenderId: '396578796468',
  appId: '1:396578796468:web:32c0fa11d152732ce338e1',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
