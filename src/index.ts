import styled from 'styled-components';

type Alignment = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignContent =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

type Props = {
  as?: string; // polymorphic prop
  alignItems?: Alignment;
  alignContent?: AlignContent;
  justifyContent?: Justify;
  flexDirection?: Direction;
  flexWrap?: Wrap;
  flexFlow?: string;
  flex?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  order?: number;
  alignSelf?: Alignment;
};

const Flex = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({ flex }) => flex && `flex: ${flex};`};
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`};
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`};
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`};
  ${({ order }) => order && `order: ${order};`};
  ${({ flexFlow }) => flexFlow && `flex-flow: ${flexFlow};`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`};
`;

export default Flex;
