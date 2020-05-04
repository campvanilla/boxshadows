import React, { useContext } from 'react';

import { StoreContext } from '@contexts/Store';
import { ColorInput } from '@components/ColorInput';

const ColorControls = () => {
  const { state, updateState } = useContext(StoreContext);

  const handleElementUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateState({
      type: 'Element',
      payload: {
        key: name,
        value: value,
      },
    });
  };

  return (
    <section className='control-section'>
      <h3 className='control-section-heading'>Colors</h3>
      <div className='control-row'>
        <h4 className='title'>Background Color</h4>
        <ColorInput
          className='control'
          onChange={handleElementUpdate}
          name='backgroundColor'
          value={state.element.backgroundColor}
          placeholder='Background Color'
        />
      </div>
      <div className='control-row'>
        <h4 className='title'>Border Color</h4>
        <ColorInput
          className='control'
          onChange={handleElementUpdate}
          name='borderColor'
          value={state.element.borderColor}
          placeholder='Border Color'
        />
      </div>
    </section>
  );
}

export default ColorControls;
