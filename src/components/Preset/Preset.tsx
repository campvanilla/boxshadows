import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Edit, Share, Copy } from '@components/icons';
import { Shadow } from '@common/types';
import { copyToClipboard } from '@utils/clipboard';
import { StoreContext, ActionType } from '@contexts/Store';

import { PresetContainer } from './styles';

interface PresetProps {
  shadows: Array<Shadow>;
  background?: string;
}

const Preset: React.FC<PresetProps> = ({ shadows, background }) => {
  const [loading, setLoading] = useState(false);
  const { updateState } = useContext(StoreContext);
  const history = useHistory();

  const shadow = shadows.map(shadow => `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${shadow.inset ? 'inset' : ''}`).join(', ');

  const edit = () => {
    updateState({
      type: ActionType.EditPreset,
      payload: shadows,
    });

    history.push('/');
  }

  return (
    <PresetContainer shadow={shadow} backgroundColor={background || '#fff'}>
      <div className='base'>
        <div className='shadow-preview' />
      </div>
      <ul className='actions-column'>
        <li className='action' onClick={edit}>
          <Edit />
          Edit
        </li>
        <li className='action' onClick={copyToClipboard.bind(null, shadow, setLoading)}>
          <Copy />
          {loading ? 'Copied!' : 'Copy'}
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
