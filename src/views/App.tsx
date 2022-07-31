import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Modal from 'react-modal';
import { darkTheme, lightTheme } from '@utils';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bkg.primary};
    transition: all 0.50s linear;
  }
`;

function Component(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (document.getElementById('root')) {
      Modal.setAppElement('#root');
    }
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.3)';
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Home/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default Component;
