import React from 'react';
import { storiesOf } from '@storybook/react';
import Test from './src/Test';

storiesOf('Test', module)
  .add('True', () => <Test condition={true}>Tadaa</Test>)
  .add('False', () => <Test condition={false}>Tadaa</Test>)