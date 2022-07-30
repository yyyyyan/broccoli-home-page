import React from 'react';
import styled from 'styled-components';
import { Box, Title } from '@widgets';
import { getColor } from '@utils';

const Header = styled(Box)<{ $darkMode?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  border-bottom: solid 2px;
  border-color: ${props => getColor('text', props.$darkMode, 'secondary')};
`;

function Component(): JSX.Element {
  return (
    <Header $alignItems="center" $paddingX={6}>
      <Title $type="secondary">BROCCOLI & Co.</Title>
    </Header>
  );
};

export default Component;
