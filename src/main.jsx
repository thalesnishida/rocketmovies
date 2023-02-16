import React from 'react';
import theme from './styles/theme';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { Perfil } from './pages/Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Perfil />
    </ThemeProvider>
  </React.StrictMode>,
)
