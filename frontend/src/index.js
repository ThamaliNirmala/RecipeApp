import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Home/Footer';

//caling the app component
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer /> 
  </React.StrictMode>,
  document.getElementById('footer')
);

