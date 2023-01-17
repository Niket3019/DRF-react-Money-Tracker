import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyCcmfbX8MVduUUfH6-0-HY6tc_KRmxUetY",
    authDomain: "moneyapp-9a0f5.firebaseapp.com",
    projectId: "moneyapp-9a0f5",
    storageBucket: "moneyapp-9a0f5.appspot.com",
    messagingSenderId: "415178494188",
    appId: "1:415178494188:web:4f7a9db360a06d924a15c9"
  };
const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
};
export default initializeAuthentication;