import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface Props {
  readonly $borderless?: boolean;
  readonly $disabled?: boolean;
  readonly $type?: 'primary' | 'secondary';
  readonly theme: DefaultTheme;
}

function getColorStyles(props: Props): FlattenSimpleInterpolation {
  const color: string = props.theme.btn[props.$type || 'primary'];
  return css`
    color: ${color};
    border: ${props.$borderless === true ? 'none' : `1px solid ${color}`};
    opacity: ${props.$disabled === true ? 0.3 : 1};
  `;
}

const Button = styled.button
  .attrs<Props>(props => ({
    disabled: props.$disabled || false
  }))<Props>`
  font-size: 1em;
  background-color: transparent;
  padding: 0.6em;

  ${props => getColorStyles(props)}
  :hover {
    text-decoration: ${props => props.$disabled === true ? 'unset' : 'underline'};
  }
`;

export default Button;
