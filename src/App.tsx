import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './firebase/fire';
import Home from './Pages/MainPages/Home';
import LoginRegister from './Pages/Authentication/LoginRegister';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [user, setState]: any = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setState(() => user);
      } else setState(() => null);
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div>
          {!user ? (
            <Route path="/login" render={() => <LoginRegister />} />
          ) : (
            <Home email={user.email} uid={user.uid} />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
