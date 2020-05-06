import SketchPicker from 'react-color/lib/Sketch';
import {isFunction} from '@utils/lang';
import React, { useState, useRef, useEffect } from 'react';
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
  const pickerRef = useRef(null);
  const clickAwayHandler = useRef((e) => {
    if (!pickerRef.current.base.contains(e.target)) {
      setActive(false);
      document.removeEventListener('click', clickAwayHandler.current);
    }
  })

  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', clickAwayHandler.current);
    }
  }, [isActive]);

  const activateOnClick = () => {
    inputRef.current?.focus();
    setActive(true);
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
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          activateOnClick();
        }
      }}
      onClick={activateOnClick}
      name={name}
      value={value}
      prepend={indicator}
      onChange={onChange}
     />
    {isActive && <PickerContainer>
        <SketchPicker
          ref={pickerRef}
          color={value}
          onChange={onPickerChange}
        />
    </PickerContainer>}
  </ColorInputWrapper>);
}
