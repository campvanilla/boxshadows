import React, { PropsWithRef } from 'react';
import PropTypes from 'prop-types';

import { FieldContainer} from './styles';
import { renderChild } from '@src/utils/react';
import isFunction from 'lodash/fp/isFunction';

interface TextInputOwnProps {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  name: string;
  value: string;
}

export type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & PropsWithRef<TextInputOwnProps>;

const TextInputWithRef: React.FC<TextInputProps> = React.forwardRef((props: TextInputProps, ref) => {
  const {
    prepend,
    append,
    className,
    value,
    onChange,
    onFocus: propOnFocus,
    onBlur: propOnBlur,
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
      <input
          {...rest}
          className='input-field'
          ref={ref}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      {renderChild(append)}
    </FieldContainer>
  )
});

TextInputWithRef.displayName = 'TextInput';

TextInputWithRef.propTypes = {
  prepend: PropTypes.node,
  append: PropTypes.node,
  className: PropTypes.string,
};

TextInputWithRef.defaultProps = {
  prepend: null,
  append: null,
  className: '',
}

export default TextInputWithRef;
