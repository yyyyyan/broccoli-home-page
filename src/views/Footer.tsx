import React from 'react';
import styled from 'styled-components';
import { Box, Text } from '@widgets';

const Footer = styled(Box)<{ $darkMode?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh;
  border-top: solid 2px ${props => props.theme.text.secondary};
  word-spacing: 0.1em;
`;

function Component(): JSX.Element {
  return (
    <Footer $vertical $alignItems="center" $justifyContent="center">
      <Text $type="secondary" $style="italic">Made with &#9829; in Melbourne</Text>
      <Text $type="secondary" $style="italic">&#9400; 2016 Broccoli & Co. All rights reserved.</Text>
    </Footer>
  );
}

export default Component;
