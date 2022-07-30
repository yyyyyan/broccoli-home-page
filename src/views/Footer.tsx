import React from 'react';
import styled from 'styled-components';
import { Box, Text } from '@widgets';
import { getColor } from '@utils';

const Footer = styled(Box)<{ $darkMode?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh;
  border-top: solid 2px;
  border-color: ${props => getColor('text', props.$darkMode, 'secondary')};
  word-spacing: 0.1em;
`;

const FooterText = styled(Text)`
  font-style: italic;
`;

function Component(): JSX.Element {
  return (
    <Footer $vertical $alignItems="center" $justifyContent="center">
      <FooterText $type="secondary">Made with &#9829; in Melbourne</FooterText>
      <FooterText $type="secondary">&#9400; 2016 Broccoli & Co. All rights reserved.</FooterText>
    </Footer>
  );
};

export default Component;
