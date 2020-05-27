import React from 'react';
import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import Flex from '..';
import 'jest-styled-components';

const StyledFlex = styled(Flex)`
  padding: 4px;
`;

describe('#Flex', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <StyledFlex flexDirection="column" justifyContent="flex-end">
          <Flex>1</Flex>
          <Flex>2</Flex>
        </StyledFlex>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
