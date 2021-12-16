import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

