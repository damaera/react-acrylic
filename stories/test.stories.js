import React from 'react';
import { storiesOf } from '@storybook/react';
import Acrylic from '../src/Acrylic';

import imgSrc from './img.jpg'

storiesOf('Acrylic', module)
  .add('Acrylic', () => {
    return <div>
      <Acrylic
        colorOverlay='#ff00ee'
        position='fixed'
        opacity='0.5'
        top='100px'
        left='100px'
        width='300px'
        height='500px'
      />
      <Acrylic
        position='fixed'
        opacity='0.5'
        top='100px'
        left='400px'
        width='700px'
        height='500px'
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laboriosam est, ex. Natus, provident adipisci voluptatem pariatur saepe, magnam doloremque assumenda quaerat atque ipsam dolores reiciendis laudantium aut quasi impedit!
        </p>
      </Acrylic>
      <div >
        <img
          src={imgSrc}
          style={{ width: '100%' }} />
      </div>
    </div>
  })