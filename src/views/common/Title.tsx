import React from 'react';
import styled from 'styled-components';
import Text from './Text';

interface Props {
  readonly $darkMode?: boolean;
  readonly $type?: 'primary' | 'secondary';
  readonly $style?: 'inherit' | 'normal' | 'italic';
}

const Title = styled(Text)<Props>`
  font-size: ${props => props.$type === 'secondary' ? '1.4em' : '2em'};
  font-weight: ${props => props.$type === 'secondary' ? 'normal' : 'bold'};
`;

export default Title;
