import 'styled-components';

declare module 'styled-components' {
  // Currently theme is simply used for colors
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
    };
    alert: {
      primary: string;
      secondary: string;
    };
    btn: {
      primary: string;
      secondary: string;
    };
    bkg: {
      primary: string;
      secondary: string;
    };
  }
}
