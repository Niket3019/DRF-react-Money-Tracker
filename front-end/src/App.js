import initializeAuthentication from './services/firebase.init';
import './App.css';
import {getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import MoneyTracker from './componenets/MoneyTracker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {

  const [user,setUser] = useState({});

  const signInwithGoogle = () =>{
    const auth = getAuth();

    signInWithPopup(auth,provider).then(result => {
      const user = result.user;
      setUser(user);
    })
    .catch(error =>{
      console.log(error.message)
    });
  };
const signOut = () =>{
  getAuth().signOut().then(( )=>{
   setUser({})
  })
}
  return (
    <>
    <button className='google' onClick={signInwithGoogle}>Login With Google</button><br/>
    {
      user.email && (<div>
          <h2>Welcome,<strong>{user.displayName}</strong> you have successfully login Now you can enjoy with our <strong>MoneyTracker</strong> app</h2>
          <button onClick={signOut}>Logout</button>
          <MoneyTracker/>
          
      </div>)
    }
   

    
    </>
  );
}

export default App;
