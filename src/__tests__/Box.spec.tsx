import React from 'react';
// import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import Box from '../Box';

describe('#Box', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box>Hi there</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
