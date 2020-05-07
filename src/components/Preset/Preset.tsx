import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Edit, Copy } from '@components/icons';
import { Shadow } from '@common/types';
import { copyToClipboard } from '@utils/clipboard';
import { StoreContext, ActionType } from '@contexts/Store';
import { SnackbarContext } from '@contexts/Snackbar';

import { PresetContainer } from './styles';
import { track } from '@src/utils/analytics';

interface PresetProps {
  meta: {
    section: string;
    index: number;
  };
  preset: {
    name: string;
    shadows: Array<Shadow>;
    background?: string;
    element?: string;
    borderThickness?: string;
    borderColor?: string;
  };
}

const Preset: React.FC<PresetProps> = ({ preset }) => {
  const { updateState } = useContext(StoreContext);
  const { updateState: updateSnackbarState } = useContext(SnackbarContext);
  const history = useHistory();

  const shadow = preset.shadows.map(shadow => `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${shadow.inset ? 'inset' : ''}`).join(', ');

  const edit = () => {
    updateState({
      type: ActionType.EditPreset,
      payload: {
        borderColor: preset.borderColor,
        borderThickness: preset.borderThickness,
        pageBackground: preset.background,
        elementBackground: preset.element,
        shadows: preset.shadows,
      },
    });
    history.push('/');
    track({ action: 'edit-preset', label: preset.name });
  }

  const handleCopy = () => {
    copyToClipboard(shadow, preset.name);
    updateSnackbarState(true, '🚀 Copied!');
  }

  return (
    <PresetContainer
      shadow={shadow}
      backgroundColor={preset.background}
      elementColor={preset.element}
      borderColor={preset.borderColor}
      borderThickness={preset.borderThickness}
    >
      <div className='base'>
        <div className='shadow-preview' />
      </div>
      <ul className='actions-column'>
        <li className='action' onClick={edit}>
          <Edit />
          Edit
        </li>
        <li className='action' onClick={handleCopy}>
          <Copy />
          Copy
        </li>
      </ul>
    </PresetContainer>
  )
}

export default Preset;
