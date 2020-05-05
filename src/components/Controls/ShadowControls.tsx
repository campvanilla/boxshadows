import React, { useContext } from 'react';

import { StoreContext, ActionType } from '@contexts/Store';
import Accordian from '@components/Accordian';
import Switch from '@components/Switch';
import { ColorInput, ColorChangeEvent } from '@components/ColorInput';
import TextInput, { TextInputAddon } from '@components/TextInput';
import { ShadowSectionIcon, TrashIcon } from '@components/icons';

const ShadowControls = () => {
  const { state, updateState } = useContext(StoreContext);

  const addShadow = () => {
    updateState({
      type: ActionType.AddShadow,
    });
  };

  const removeShadow = (id: number) => {
    updateState({
      type: ActionType.RemoveShadow,
      payload: { id },
    });
  };

  const handleShadowUpdate = (id: number) => (e: React.ChangeEvent<HTMLInputElement> | ColorChangeEvent) => {
    if (typeof (e as React.ChangeEvent<HTMLInputElement>).target !== 'undefined') {
      const { name, value, checked } = (e as React.ChangeEvent<HTMLInputElement>).target;
      updateState({
        type: ActionType.UpdateShadow,
        payload: {
          id,
          key: name,
          value: typeof checked !== 'undefined' ? checked : value,
        },
      });
    } else {
      const { name, value } = (e as ColorChangeEvent);
        updateState({
          type: ActionType.UpdateShadow,
          payload: {
            id,
            key: name,
            value: value,
          },
        });
    }
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
          <Accordian.Item key={shadow.id} heading={[
            <TrashIcon key='trash' onClick={(e) => {
              e.stopPropagation();
              removeShadow(shadow.id);
            }} />,
            <span key='header-text'>Shadow #{state.shadows.length - index}</span>
          ]} defaultOpen>
            <div className='control-row'>
              <h4 className='title'>Offset</h4>
              <TextInput
                type='number'
                value={shadow.offsetX}
                className='control'
                name='offsetX'
                append={<TextInputAddon>x</TextInputAddon>}
                placeholder='Offset X'
                onChange={handleShadowUpdate(shadow.id)}
              />
              <TextInput
                type='number'
                value={shadow.offsetY}
                className='control'
                name='offsetY'
                append={<TextInputAddon>y</TextInputAddon>}
                placeholder='Offset Y'
                onChange={handleShadowUpdate(shadow.id)}
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
                onChange={handleShadowUpdate(shadow.id)}
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
                onChange={handleShadowUpdate(shadow.id)}
              />
            </div>
            <div className='control-row'>
              <h4 className='title'>Inset</h4>
              <Switch
                onChange={handleShadowUpdate(shadow.id)}
                name='inset'
                checked={shadow.inset}
              />
            </div>
            <div className='control-row'>
              <h4 className='title'>Shadow Color</h4>
              <ColorInput
                className='control'
                onChange={handleShadowUpdate(shadow.id)}
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
