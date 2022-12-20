import React from 'react';
import ReactDOM from 'react-dom/client';



import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import {Provider} from 'react-redux'
let middleware = [thunk]

let reducer = combineReducers({

})
let intialstate = {

}

let store = createStore(reducer, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={'loading'}>
    <Provider store={store}> 

    <App />
    
    </Provider>
    </React.Suspense>
    
  </React.StrictMode>
);