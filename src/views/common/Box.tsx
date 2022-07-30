import styled, { css } from 'styled-components';

interface Props {
  readonly $vertical?: boolean;
  readonly $reversed?: boolean;
  readonly $justifyContent?: 'flex-start' | 'flex-end' | 'center';
  readonly $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  readonly $paddingX?: number;
  readonly $paddingY?: number;
}

function getDirection(props: Props): string {
  let direction: string = 'row';

  if (props.$vertical === true) {
    direction = props.$reversed ? 'column-reverse' : 'column';
  } else if (props.$reversed === true) {
    direction = 'row-reverse';
  }
  return direction;
}

function hasPadding(props: Props): boolean {
  return typeof props.$paddingX === 'number'
    || typeof props.$paddingY === 'number';
}

const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${props => getDirection(props)};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  align-items: ${props => props.$alignItems || 'baseline'};
  ${props => hasPadding(props) ? css`
    padding-left: ${props.$paddingX || 0}em;
    padding-right: ${props.$paddingX || 0}em;
    padding-top: ${props.$paddingY || 0}em;
    padding-bottom: ${props.$paddingY || 0}em;
  ` : ''}
`;

export default Box;
