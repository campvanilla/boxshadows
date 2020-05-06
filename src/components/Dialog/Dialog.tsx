import React from 'react';

import { DialogContainer, Overlay } from './styles';

const Dialog = ({ children, onClose, open, ...rest }) => {
  if (!open) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <DialogContainer open={open} { ...rest }>
        {children}
      </DialogContainer>
    </Overlay>
  )
};

export default Dialog;
