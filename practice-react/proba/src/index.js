import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from './App';
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';



const BigButton = styled(Button)`
    margin: 10px auto;
    width: 245px;
    text-align: center;
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Send </BigButton>
    <BootstrapTest/>
  </React.StrictMode>
);


