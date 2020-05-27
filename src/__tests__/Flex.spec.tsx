import React from 'react';
// import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import Flex from '../Flex';

describe('#Flex', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Flex>Hi there</Flex>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
