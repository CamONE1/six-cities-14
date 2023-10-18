import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setting = {
  PlacesCount: 6,
} as const;

root.render(
  <React.StrictMode>
    <App placesCount = {setting.PlacesCount} />
  </React.StrictMode>
);
