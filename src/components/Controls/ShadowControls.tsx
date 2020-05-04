import React, { useContext } from 'react';

import { StoreContext, actions } from '@contexts/Store';
import Accordian from '@components/Accordian';
// import Switch from '@components/Switch';
import { ColorInput, ColorChangeEvent } from '@components/ColorInput';
import TextInput, { TextInputAddon } from '@components/TextInput';
import { ShadowSectionIcon } from './icons';

const ShadowControls = () => {
  const { state, updateState } = useContext(StoreContext);

  const addShadow = () => {
    updateState({
      type: actions.AddShadow,
    });
  };

  const handleShadowUpdate = (index: number) => (e: React.ChangeEvent<HTMLInputElement> | ColorChangeEvent) => {
    const { name, value } =
      typeof (e as React.ChangeEvent<HTMLInputElement>).target !== 'undefined'
        ? (e as React.ChangeEvent<HTMLInputElement>).target
        : (e as ColorChangeEvent);

    updateState({
      type: actions.UpdateShadow,
      payload: {
        shadowIndex: index,
        key: name,
        value,
      }
    })
  }

  return (
    <section className='control-section'>
      <h3 className='control-section-heading'>
        <ShadowSectionIcon />
        <span>Shadows</span>
        <button className='add-btn' onClick={addShadow}>
          +
        </button>
      </h3>
      <Accordian>
        {state.shadows.map((shadow, index) => (
          <Accordian.Item key={index} heading={`Shadow #${index + 1}`} defaultOpen={index === 0}>
            <div className='control-row'>
              <h4 className='title'>Offset</h4>
              <TextInput
                type='number'
                value={shadow.offsetX}
                className='control'
                name='offsetX'
                append={<TextInputAddon>x</TextInputAddon>}
                placeholder='Offset X'
                onChange={handleShadowUpdate(index)}
              />
              <TextInput
                type='number'
                value={shadow.offsetY}
                className='control'
                name='offsetY'
                append={<TextInputAddon>y</TextInputAddon>}
                placeholder='Offset Y'
                onChange={handleShadowUpdate(index)}
              />
            </div>
            <div className='control-row'>
              <h4 className='title'>Blur</h4>
              <TextInput
                type='number'
                value={shadow.blur}
                className='control'
                name='blur'
                placeholder='Blur'
                onChange={handleShadowUpdate(index)}
              />
            </div>
            <div className='control-row'>
              <h4 className='title'>Spread</h4>
              <TextInput
                type='number'
                value={shadow.spread}
                className='control'
                name='spread'
                placeholder='Spread'
                onChange={handleShadowUpdate(index)}
              />
            </div>
            <div className='control-row'>
              <h4 className='title'>Shadow Color</h4>
              <ColorInput
                className='control'
                onChange={handleShadowUpdate(index)}
                name='color'
                value={shadow.color}
                placeholder='Shadow Color'
              />
            </div>
          </Accordian.Item>
        ))}
      </Accordian>
    </section>
  );
}

export default ShadowControls;
