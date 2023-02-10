import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import './style/style.scss';

const marvelService = new MarvelService();

MarvelService.getAllCharacters().then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
