import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import {QueryClient, QueryClientProvider} from "react-query";
import { theme } from './theme';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

