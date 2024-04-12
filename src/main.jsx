//en la linea del video, este documento sustituye al index.js
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//import { createRoot } from 'react-dom/client';
// main.js o main.jsx
import '@fortawesome/fontawesome-free/css/all.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/*envolví la App dentro del browserRouter para dar la posibilidad de usar los routers dentro de la aplicacion */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals()
