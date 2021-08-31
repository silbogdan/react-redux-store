import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import combinedReducers from './reducers';
import { Provider } from 'react-redux';
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

const theme = createTheme({
  palette: {
    primary: {
      light: "#62efff",
      dark: "#008ba3",
      main: "#00bcd4",
      contrastText: "#000000"
    },
    secondary: {
      light: "#819ca9",
      dark: "#29434e",
      main: "#546e7a",
      contrastText: "#ffffff"
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
