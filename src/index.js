import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// import FetchContext from './context/Fetch';
import store from './todoredux/store';
import { Provider } from 'react-redux';
import Context1 from './context/Context1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        // <Provider store={store}>
        //         <App />
        // </Provider>

        <Context1 value='hello'>
                <App/>
        </Context1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
