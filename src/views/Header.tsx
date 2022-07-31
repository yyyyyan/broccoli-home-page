import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Title } from '@widgets';

const Header = styled(Box)<{ $darkMode?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  border-bottom: solid 2px ${props => props.theme.text.secondary};
  padding-left: 2em;
  padding-right: 1em;
`;

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

function Component(props: Props): JSX.Element {
  const [canToggle, setCanToggle] = useState<boolean>(true);

  return (
    <Header $alignItems="center" $justifyContent="space-between">
      <Title $type="secondary">BROCCOLI & Co.</Title>
      <Button
        $type="secondary"
        $disabled={!canToggle}
        onClick={() => {
          setCanToggle(false);
          props.setIsDarkMode(!props.isDarkMode);
          // Sets a delay to avoid being toggled too frequently
          setTimeout(() => setCanToggle(true), 1000);
        }}>
        Toggle Theme
      </Button>
    </Header>
  );
}

export default Component;
