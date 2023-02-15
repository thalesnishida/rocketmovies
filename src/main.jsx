import React from 'react';
import theme from './styles/theme';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { Preview } from './pages/Preview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Preview />
    </ThemeProvider>
  </React.StrictMode>,
)
