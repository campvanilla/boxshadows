import React from 'react';

import { PresetContainer } from './styles';
import { Edit, Share, Copy } from '@components/icons';
import { Shadow } from '@common/types';

interface PresetProps {
  shadows: Array<Shadow>;
}

const Preset: React.FC<PresetProps> = ({ shadows }) => {
  const shadow = shadows.map(shadow => `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${shadow.inset ? 'inset' : ''}`).join(', ');

  return (
    <PresetContainer shadow={shadow}>
      <div className='base' />
      <ul className='actions-column'>
        <li className='action'>
          <Edit />
          Edit
        </li>
        <li className='action'>
          <Copy />
          Copy
        </li>
        <li className='action'>
          <Share />
          Share
        </li>
      </ul>
    </PresetContainer>
  )
}

export default Preset;
