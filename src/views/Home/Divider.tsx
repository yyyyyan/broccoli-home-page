import styled from 'styled-components';

const Divider = styled.hr`
  width: 2em;
  border-top: 2px solid ${props => props.theme.text.secondary};
  border-radius: 1px;
`;

export default Divider;
