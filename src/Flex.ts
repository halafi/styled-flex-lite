import styled from 'styled-components';

type Props = {
  as: string; // polymorphic prop
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
};

const Flex = styled.div<Props>`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`};
  box-sizing: border-box;
`;

export default Flex;
