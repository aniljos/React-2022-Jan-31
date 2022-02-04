import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import AppThemeProvider from './context/AppThemeProvider';
import AppErrorBoundary from './components/errors/AppErrorBoundary';
import './axios/interceptors';
import MuiApp from './MuiApp';


ReactDOM.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AppThemeProvider>
        <Provider store={store}>
          {/* <App /> */}
          <MuiApp/>
        </Provider>
      </AppThemeProvider>
    </AppErrorBoundary>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
