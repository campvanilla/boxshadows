import { SketchPicker } from 'react-color';
import isFunction from 'lodash/fp/isFunction';
import React, { useState } from 'react';
import type { ColorChangeHandler } from 'react-color';

import TextInput, { TextInputProps } from '@components/TextInput';
import { ColorIndicator,PickerContainer, ColorInputWrapper } from '@components/ColorInput/styles';

export interface ColorChangeEvent {
  name: string; value: string;
}

export interface ColorInputProps extends TextInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | ColorChangeEvent) => void;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  value,
  name,
  onBlur,
  onFocus,
  onChange,
  ...rest
}: ColorInputProps) => {
  const [isActive, setActive] = useState(false);
  const activateOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isFunction(onFocus)) {
      onFocus(e);
    }
    setActive(true);
  };

  const activateOnClick = () => {
    setActive(true);
  };

  const deactivate = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isFunction(onBlur)) {
      onBlur(e);
    }
    setActive(false);
  };

  const onPickerChange: ColorChangeHandler = (color) => {
    console.log("onPickerChange:ColorChangeHandler -> color", color)
    const { hex } = color;
    if (isFunction(onChange)) {
      onChange({ name, value: hex });
    }
  };

  const indicator = (<ColorIndicator color={value}
   onClick={activateOnClick}
  />);


  return (<ColorInputWrapper>
    <TextInput
      {...rest}
      onFocus={activateOnFocus}
      onBlur={deactivate}
      name={name}
      value={value}
      prepend={indicator}
     />
    {isActive && <PickerContainer>
      <SketchPicker onChange={onPickerChange} />
    </PickerContainer>}
  </ColorInputWrapper>);
}
