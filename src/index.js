import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/styles/theme';

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'

// Bring the redux store too
import store from './redux/store'

const rootStyle = {
  // backgroundColor : '#363e53',
  
  backgroundColor : 'white',
  color : 'white',
  height : '100%'
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={rootStyle}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </div>
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
