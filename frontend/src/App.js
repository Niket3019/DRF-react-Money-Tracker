import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Function to handle successful login
  const responseGoogle = (response) => {
    if (response && response.profileObj) {
      setIsLoggedIn(true);
      setUserName(response.profileObj.name);
    }
  }

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </>
      ) : (
        <GoogleLogin
          clientId="1058157458390-iu5pbqtlhsfi0qcsjf6t8oc9k8t00t7f.apps.googleusercontent.com" // replace with your client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

export default App;
