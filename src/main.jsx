import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.Proctor = {
  init: (config) => {
    console.log('Proctor React Widget Initialized', config);
    // Create container if not exists
    let container = document.getElementById('proctor-widget-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'proctor-widget-root';
      document.body.appendChild(container);
    }

    // Mount React App
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App config={config} />
      </React.StrictMode>,
    )
  }
};
