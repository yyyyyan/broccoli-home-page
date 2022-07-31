import styled from 'styled-components';

const TextInput = styled.input
  .attrs(() => ({
    type: 'text'
  }))`
  font-size: 1em;
  padding-left: 0.5em;
  border: 1px solid ${props => props.theme.text.secondary};
`;

export default TextInput;
