import React, { useState } from 'react';

interface Context {
  state: {
    open: boolean;
    content: React.ReactNode;
  };
  updateState: (open: boolean, context: React.ReactNode) => void;
}

export const SnackbarContext = React.createContext<Context>({} as any);

const SnackBarProvider = ({ children }) => {
  const [state, updateState] = useState<{open: boolean; content: React.ReactNode}>({
    open: false,
    content: '',
  });

  const contextValue: Context = {
    state,
    updateState: (open, content = '') => {
      if (open === true && (!state.open || !state.content)) {
        setTimeout(() => {
          updateState((oldState) => {
            return {
              ...oldState,
              open: false,
            }
          })

          setTimeout(() => {
            updateState(() => {
              return {
                open: false,
                content: ''
              };
            });
          }, 1000)
        }, 3000);

        updateState({
          open: true,
          content,
        });
      }
    },
  };

  return <SnackbarContext.Provider value={contextValue}>{children}</SnackbarContext.Provider>;
};

export default SnackBarProvider;
