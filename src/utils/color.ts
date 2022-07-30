interface IPaletteItem {
  primary: {
    light: string;
    dark: string;
  };
  secondary: {
    light: string;
    dark: string;
  };
}

const PALETTE: { [key: string]: IPaletteItem } = {
  text: {
    primary: { light: '#0f0f0f', dark: '#cccccc' },
    secondary: { light: '#5e5e5e', dark: '#969696' },
  },
  bkg: {
    primary: { light: '#ffffff', dark: '#1f1f1f' },
    secondary: { light: '#ededed', dark: '#2e2e2e' },
  }
};

function getColor(type: 'text' | 'bkg',
                  isDarkMode: boolean = false,
                  subtype: 'primary' | 'secondary' = 'primary'): string {
  const color = PALETTE[type][subtype][isDarkMode ? 'dark' : 'light'];
  return color || 'orange';
}

export { getColor };
