import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './styles/general-style.css';

import GlobalStyle from './components/Style/GlobalStyle';
import { lightTheme, darkTheme } from './components/Style/Themes';
import { useDarkMode } from './hooks';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';
import Main from './pages/Main/Main';


const AppContainer = styled.main`

`;

function App() {
  const [theme, toggleTheme, isComponentMounted] = useDarkMode();
  const themeMode = (theme === 'light' ? lightTheme : darkTheme);

  if (!isComponentMounted) return <div/>;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <AppContainer>
          <ThemeToggler toggleTheme={toggleTheme} />
          <Main />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
