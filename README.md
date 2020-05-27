# Styled Flex Component

Minimalistic React Flex component with Typescript support.

- No styled-system props
- No support for array props
- Compatible with majority of rebass props

## Install

```
yarn add styled-flex-lite
or
npm i -S styled-flex-lite
```

## Usage

```jsx
import React from 'react';
import Flex from 'styled-flex-lite';

export default () => (
  <Flex flexDirection="column" alignItems="center" as="main">
    <div>Hello</div>
    <div>World</div>
  </Flex>
);
```

## Flex Props

```
  as?: string; // polymorphic prop, e.g. main, footer...
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
```

# License

MIT
