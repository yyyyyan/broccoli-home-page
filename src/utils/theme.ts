import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  text: {
    primary: '#0f0f0f',
    secondary: '#5e5e5e',
  },
  alert: {
    primary: '#B33A3A',
    secondary: '#de980b'
  },
  btn: {
    primary: '#0f0f0f',
    secondary: '#5e5e5e',
  },
  bkg: {
    primary: '#ffffff',
    secondary: '#f5f5f5',
  }
};

const darkTheme: DefaultTheme = {
  text: {
    primary: '#cccccc',
    secondary: '#969696',
  },
  alert: {
    primary: '#bf544b',
    secondary: '#f2ae24'
  },
  btn: {
    primary: '#cccccc',
    secondary: '#969696',
  },
  bkg: {
    primary: '#1f1f1f',
    secondary: '#212121',
  }
};

export { lightTheme, darkTheme };
