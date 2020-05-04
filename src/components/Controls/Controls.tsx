import React from 'react';

import { ControlsContainer } from './styles';
import TextInput from '@components/TextInput';

import ElementControls from './ElementControls';
import ColorControls from './ColorControls';

const Controls = () => {
  return (
    <ControlsContainer>
      <ElementControls />
      <ColorControls />
      <section className='control-section'>
        <h3 className='control-section-heading'>
          Shadows
        </h3>
        <div className='control-row'>
          <h4 className='title'>Offset</h4>
          <TextInput
            className='control'
            name='elementShadowOffsetX'
            placeholder='Offset X'
          />
          <TextInput
            className='control'
            name='elementShadowOffsetY'
            placeholder='Offset Y'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Blur</h4>
          <TextInput
            className='control'
            name='elementShadowBlur'
            type='number'
            placeholder='Blur'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Spread</h4>
          <TextInput
            className='control'
            name='elementShadowSpread'
            type='number'
            placeholder='Spread'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Shadow Color</h4>
          <TextInput
            className='control'
            name='elementShadowColor'
            value='#EBEBEB'
          />
        </div>
      </section>
    </ControlsContainer>
  );
}

export default Controls;
