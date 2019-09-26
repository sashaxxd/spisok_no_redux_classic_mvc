import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from "./components/ScrollToTop";
//1 Подключаем store redux
import {createStore, compose, applyMiddleware} from 'redux'
//3 Подключаем rootReducer корневой редюсер из папки store
import rootReducer from './store/reducers/rootReducer'
//3 Импортируем Provider из react-redux - что бы обернуть приложение
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


//2 Передаем в store редюсеры
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


const app = (
    <Provider store={store}>
        <BrowserRouter>
           <ScrollToTop>
            <App/>
           </ScrollToTop>
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
