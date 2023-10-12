import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Profile from './components/first';
import Avatar from './components/first';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> <br/>
    <Avatar />
  </React.StrictMode>
);

