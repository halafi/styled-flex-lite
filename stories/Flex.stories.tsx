// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Flex from '../src';

export default { title: 'Flex', decorators: [withKnobs] };

const StyledFlex = styled(Flex)`
  padding: 8px;
  border: 1px solid black;
  border-radius: 6px;
`;

const Root = styled(StyledFlex)`
  height: 90vh;
`;

const FLEX_DIRECTIONS = {
  row: 'row',
  column: 'column',
  rowReverse: 'row-reverse',
  columnReverse: 'column-reverse',
};

const JUSTIFY_CONTENT = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
};

const ALIGN_ITEMS = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const ALIGN_CONTENT = {
  stretch: 'stretch',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
};

const FLEX_WRAP = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  'wrap-reverse': 'wrap-reverse',
};

const GROUP = 'Flex props';

export const layout = () => (
  <Root
    flexDirection={select('flexDirection', FLEX_DIRECTIONS, FLEX_DIRECTIONS.row, GROUP)}
    justifyContent={select('justifyContent', JUSTIFY_CONTENT, JUSTIFY_CONTENT.flexStart, GROUP)}
    alignContent={select('alignContent', ALIGN_CONTENT, ALIGN_CONTENT.stretch, GROUP)}
    alignItems={select('alignItems', ALIGN_ITEMS, ALIGN_ITEMS.center, GROUP)}
    flexWrap={select('flexWrap', FLEX_WRAP, FLEX_WRAP.wrap, GROUP)}
  >
    <StyledFlex flex="1 0 200px">1 0 200px</StyledFlex>
    <StyledFlex flex="5 0 300px">
      <StyledFlex flex="1 0 auto">1 0 auto</StyledFlex>
      <StyledFlex flex="1 0 auto">1 0 auto</StyledFlex>
    </StyledFlex>
    <StyledFlex flex="1 0 200px">1 0 200px</StyledFlex>
  </Root>
);
