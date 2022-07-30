import React from 'react';
import styled from 'styled-components';
import { Box, Text, Title } from '@widgets';
import Header from './Header';
import Footer from './Footer';

const Content = styled(Box)`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  word-spacing: 0.1em;
`;

function Component(): JSX.Element {
  return (
    <div>
      <Header/>
      <Content $vertical $justifyContent="center" $alignItems="center">
        <Box $vertical $alignItems="center">
          <Title>A better way</Title>
          <Title>to enjoy every day.</Title>
          <Box $paddingY={0.8}>
            <Text>Be the first to know when we launch.</Text>
          </Box>
        </Box>
      </Content>
      <Footer/>
    </div>
  );
};

export default Component;
