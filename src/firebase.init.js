import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {

  
  apiKey: "AIzaSyAeRXdyhKWts5MBco9_7GhQjfLo2yHCllA",
  authDomain: "dr-william-f-turner.firebaseapp.com",
  projectId: "dr-william-f-turner",
  storageBucket: "dr-william-f-turner.appspot.com",
  messagingSenderId: "606227563748",
  appId: "1:606227563748:web:ca5c638c068f89f43018f1"

  // apiKey: `${process?.env?.REACT_APP_apiKey}`,  
  // authDomain: `${process?.env?.REACT_APP_authDomain}`,
  // projectId: `${process?.env?.REACT_APP_projectId}`,
  // storageBucket: `${process?.env?.REACT_APP_storageBucket}`,
  // messagingSenderId: `${process?.env?.REACT_APP_messagingSenderId}`,
  // appId: `${process?.env?.REACT_APP_appId}`
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth