import React, { useContext } from 'react';

import { SnackbarContext } from '@contexts/Snackbar';

import { SnackbarContainer } from './styles';

const Snackbar = () => {
  const { state } = useContext(SnackbarContext);

  return (
    <SnackbarContainer open={state.open}>
      {state.content}
    </SnackbarContainer>
  )
}

export default Snackbar;
