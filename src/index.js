import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import configureStore from "./redux/store/configureStore";
import "./i18n";

const store = configureStore();
const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading ...</h2>
  </div>
)
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <Provider store={store} >
      <App />
      </Provider>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

