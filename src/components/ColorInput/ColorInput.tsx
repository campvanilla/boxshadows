import SketchPicker from 'react-color/lib/Sketch';
import {isFunction} from '@utils/lang';
import React, { useState, useRef } from 'react';
import type { ColorChangeHandler } from 'react-color';

import TextInput, { TextInputProps, TextInputAddon } from '@components/TextInput';
import { ColorIndicator, PickerContainer, ColorInputWrapper, PickerOverlay } from '@components/ColorInput/styles';

export interface ColorChangeEvent {
  name: string; value: string;
}

export interface ColorInputProps extends TextInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | ColorChangeEvent) => void;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  value,
  name,
  onFocus,
  onChange,
  ...rest
}: ColorInputProps) => {
  const [isActive, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const activateOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isFunction(onFocus)) {
      onFocus(e);
    }
    setActive(true);
  };

  const activateOnClick = () => {
    inputRef.current?.focus();
    setActive(true);
  };

  const deactivate = () => {
    setActive(false);
  };

  const onPickerChange: ColorChangeHandler = (color) => {
    const { hex } = color;
    if (isFunction(onChange)) {
      onChange({ name, value: hex });
    }
  };

  const indicator = (<TextInputAddon>
    <ColorIndicator color={value}
     onClick={activateOnClick}
    />
  </TextInputAddon>);


  return (<ColorInputWrapper>
    <TextInput
      {...rest}
      ref={inputRef}
      onFocus={activateOnFocus}
      name={name}
      value={value}
      prepend={indicator}
      onChange={onChange}
     />
    {isActive && <PickerContainer>
      <PickerOverlay onClick={deactivate} />
        <SketchPicker
          color={value}
          onChange={onPickerChange}
        />
    </PickerContainer>}
  </ColorInputWrapper>);
}
