import React from 'react';
import PropTypes from 'prop-types';

import { FieldContainer, StyledInput } from './styles';
import { renderChild } from '@src/utils/react';
import isFunction from 'lodash/fp/isFunction';

interface TextInputOwnProps {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  name: string;
  value: string;
}

export type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & TextInputOwnProps;

const TextInputOwnProps: React.FC<TextInputProps> = (props) => {
  const {
    prepend,
    append,
    className,
    value,
    onChange,
    onFocus: propOnFocus,
    onBlur: propOnBlur,
    ref,
    ...rest
  } = props;

  const [focused, setFocus] = React.useState(false);
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);

    if (isFunction(propOnFocus)) propOnFocus(e);
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);

    if (isFunction(propOnBlur)) propOnBlur(e);
  }

  return (
    <FieldContainer className={className} fieldFocused={focused}>
      {renderChild(prepend)}
      <StyledInput
         {...rest}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      {renderChild(append)}
    </FieldContainer>
  )
}

TextInputOwnProps.propTypes = {
  prepend: PropTypes.node,
  append: PropTypes.node,
  className: PropTypes.string,
};

TextInputOwnProps.defaultProps = {
  prepend: null,
  append: null,
  className: '',
}
export default TextInputOwnProps;
