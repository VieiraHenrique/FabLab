import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { getUsersSessions } from './api/index';
import Routes from './routes/routes';
import { Header, Nav } from './components/commons';
import './App.css';


function App() {
const [user, setUser] = useState({
  loggedIn: false,
  data: {}
}); 
useEffect(()=>{
  
  getUsersSessions('/user').then((response)=>{
    if (response.data.loggedIn && !user.loggedIn) {
      setUser({
        loggedIn: true, 
        data: response.data.user
      });

    }
    else if(!response.data.loggedIn && user.loggedIn) {
      setUser({
        loggedIn: false,
        user: {}
      });
    }
  });
},[user]);

  return (
    <Router>
        <Header user={user} />
        <Routes user={user} />
        <Nav />
    </Router>
  );
}

export default App;
