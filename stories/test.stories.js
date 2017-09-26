import React from 'react';
import { storiesOf } from '@storybook/react';
import Acrylic from '../src/Acrylic';

import imgSrc from './img.jpg'

storiesOf('Acrylic', module)
  .add('Acrylic', () => {
    return <div>
      <Acrylic
        opacity='0.2'
      />
      <Acrylic
        position='fixed'
        opacity='0.5'
        top='100px'
        left='400px'
        width='calc(100% - 500px)'
        height='calc(100vh - 200px)'
      />
      <div >
        <img
          src={imgSrc}
          style={{ width: '100%' }} />
      </div>
    </div>
  })