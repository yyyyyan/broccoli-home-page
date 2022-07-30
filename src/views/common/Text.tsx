import styled from 'styled-components';
import { getColor } from '@utils';

interface Props {
  readonly $darkMode?: boolean;
  readonly $type?: 'primary' | 'secondary';
}

const Text = styled.span<Props>`
  font-size: 1em;
  color: ${props => getColor('text', props.$darkMode, props.$type)};
`;

export default Text;
