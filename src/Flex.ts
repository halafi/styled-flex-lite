import styled from 'styled-components';

type Props = {
  as?: string; // polymorphic prop
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
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const Flex = styled.div<Props>`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`};
  box-sizing: border-box;
`;

export default Flex;
