import React from 'react';
import PropTypes from 'prop-types';

import { FieldContainer, StyledInput } from './styles';
import { renderChild } from '@src/utils/react';

interface TextInput {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & TextInput;

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    prepend,
    append,
    className,
    id,
    value,
    onChange,
    ...rest
  } = props;

  const [focused, setFocus] = React.useState(false);
  const onFocus = () => {
    setFocus(true);
  }
  const onBlur = () => {
    setFocus(false);
  }

  return (
    <FieldContainer className={className} fieldFocused={focused}>
      {renderChild(prepend)}
      <StyledInput {...rest as any} id={id} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
      {renderChild(append)}
    </FieldContainer>
  )
}

TextInput.propTypes = {
  prepend: PropTypes.node,
  append: PropTypes.node,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  prepend: null,
  append: null,
  className: '',
}
export default TextInput;
