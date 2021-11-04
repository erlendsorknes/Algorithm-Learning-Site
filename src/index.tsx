import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,} from "react-router-dom";

// 1. import `ChakraProvider` component
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.render(
    <Router>
        <ChakraProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ChakraProvider>
    </Router>,

    document.getElementById('root')
);