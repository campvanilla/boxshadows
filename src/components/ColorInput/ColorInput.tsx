import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import TextInput from '../TextInput';
import { ColorIndicator } from './styles';

export interface ColorInputProps {
  value: string;
  name: string;
  className: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  value,
  className,
  placeholder,
}: ColorInputProps) => {
  const [isActive, setActive] = useState(false);
  const activate = () => {setActive(true);};
  const deactivate = () => {setActive(false);};

  return (<span>
    <TextInput
      className={className}
      onFocus={activate}
      onBlur={deactivate}
      placeholder={placeholder}
      prepend={
        <ColorIndicator color={value}
          onClick={activate}
        />
      }
     />
    {isActive && <SketchPicker />}
  </span>);
}
