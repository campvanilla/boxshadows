import React, { useContext } from 'react';

import TextInput, { TextInputAddon } from '@components/TextInput';
import { StoreContext, ActionType } from '@contexts/Store';
import { ElementSectionIcon } from '@components/icons';

const ElementControls = () => {
  const { state, updateState } = useContext(StoreContext);

  const handleElementUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateState({
      type: ActionType.UpdateElement,
      payload: {
        key: name,
        value: value,
      },
    });
  };

  return (
    <section className='control-section'>
      <h3 className='control-section-heading'>
        <ElementSectionIcon />
        <span>Elements</span>
      </h3>
      <div className='control-row'>
        <h4 className='title'>Size</h4>
        <TextInput
          type='number'
          value={state.element.height}
          className='control'
          name='height'
          append={<TextInputAddon>h</TextInputAddon>}
          placeholder='Height'
          onChange={handleElementUpdate}
        />
        <TextInput
          type='number'
          value={state.element.width}
          className='control'
          name='width'
          append={<TextInputAddon>w</TextInputAddon>}
          placeholder='Width'
          onChange={handleElementUpdate}
        />
      </div>
      <div className='control-row'>
        <h4 className='title'>Border</h4>
        <TextInput
          type='number'
          value={state.element.borderRadius}
          className='control'
          name='borderRadius'
          append={<TextInputAddon>r</TextInputAddon>}
          placeholder='Radius'
          onChange={handleElementUpdate}
        />
        <TextInput
          type='number'
          value={state.element.borderThickness}
          className='control'
          name='borderThickness'
          append={<TextInputAddon>w</TextInputAddon>}
          placeholder='Width'
          onChange={handleElementUpdate}
        />
      </div>
    </section>
  );
};

export default ElementControls;
