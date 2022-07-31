import styled from 'styled-components';

interface Props {
  readonly $alert?: boolean;
  readonly $type?: 'primary' | 'secondary';
  readonly $style?: 'inherit' | 'normal' | 'italic';
}

const Text = styled.span<Props>`
  font-size: 1em;
  font-style: ${props => props.$style || 'inherit'};
  color: ${props => props.$alert === true ?
    props.theme.alert[props.$type || 'primary'] : props.theme.text[props.$type || 'primary']}
`;

export default Text;
