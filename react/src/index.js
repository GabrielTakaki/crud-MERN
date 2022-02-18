import App from './App';
import React from 'react';
import store from './redux';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={ store }>
    <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
