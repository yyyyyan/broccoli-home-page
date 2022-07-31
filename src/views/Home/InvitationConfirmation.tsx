import React from 'react';
import styled from 'styled-components';
import { Box, Button, Text, Title } from '@widgets';
import Divider from './Divider';

const ConfirmButton = styled(Button)`
  width: 100%;
  height: 2.5em;
  margin: 0.3em 0;
`;

interface Props {
  onConfirm: () => void;
}

function Component(props: Props): JSX.Element {
  return (
    <Box $vertical $alignItems="center" $minWidth={18} $paddingX={1} $paddingY={1.5}>
      <Title $type="secondary" $style="italic">All done!</Title>
      <Divider/>
      <Box $vertical $paddingY={2}>
        <Text>You will be one of the first to experience</Text>
        <Text>Broccoli & Co. when we launch</Text>
      </Box>
      <ConfirmButton onClick={props.onConfirm}>OK</ConfirmButton>
    </Box>
  );
}

export default Component;
