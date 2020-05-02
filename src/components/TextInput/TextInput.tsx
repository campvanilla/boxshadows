import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface TextInput {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & TextInput;

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    prepend,
    append,
    ...rest
  } = props;

  return (
    <Container tabIndex={-1}>
      {
        prepend
          ? (
            <span className='prepend'>
              {prepend}
            </span>
          )
          : (
            null
          )
      }
      <input className='input' {...rest} />
      {
        append
          ? (
            <span className='append'>
              {append}
            </span>
          )
          : (
            null
          )
      }
    </Container>
  )
}

TextInput.propTypes = {
  prepend: PropTypes.node,
  append: PropTypes.node,
};

TextInput.defaultProps = {
  prepend: null,
  append: null,
}

export default TextInput;
