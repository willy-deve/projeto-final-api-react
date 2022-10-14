import React from 'react';
import { ThemeProvider } from 'styled-components';
import StylesGlobal from './config/GlobalSyle';
import defaultTheme from './config/theme/Default';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <StylesGlobal />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
