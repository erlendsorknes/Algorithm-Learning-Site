import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/homepage/homepage';
import reportWebVitals from './reportWebVitals';


// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);