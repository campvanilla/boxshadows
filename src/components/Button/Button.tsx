import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    ...rest
  } = props;

  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button;
