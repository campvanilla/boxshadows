import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  disabled?: boolean;
}

const Button = (props) => {
  const {
    children,
    disabled,
    ...rest
  } = props;

  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button;
