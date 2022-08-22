import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import authReducer, { loadUser } from './redux/authSlice';
import studentReducer, { fetchStudents } from './redux/studentSlice';
import feeReducer from './redux/feeSlice';
import transactionReducer from './redux/transactionSlice';

const store = configureStore({
    reducer  : {
       auth     : authReducer,
       students : studentReducer,
       fees     : feeReducer,
       transactions: transactionReducer
    }
 });
 
 store.dispatch(fetchStudents())
 store.dispatch(loadUser(null))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
document.getElementById('root'));
