import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { createStore, compose } from "redux"
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
    <ChakraProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ChakraProvider>,
    document.getElementById('root')
);