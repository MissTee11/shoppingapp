import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './components/AppRoutes';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './features/CartReducer';
import ProductReducer from './features/ProductReducer';

const store = configureStore({
  reducer: {
    product:  ProductReducer,
    cart: CartReducer 
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRoutes />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
