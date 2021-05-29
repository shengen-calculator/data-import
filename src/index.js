import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from "./redux/configureStore";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import '../node_modules/toastr/build/toastr.min.css';

const {store, persistent} = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistent}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </PersistGate>
    </Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics api. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
