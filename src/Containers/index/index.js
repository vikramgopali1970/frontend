import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxThunk from'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from '../app/App';
import rootReducer from '../../Reducers/index';
import * as serviceWorker from '../app/serviceWorker';


const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const AppElement = ()=>(
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<AppElement />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
