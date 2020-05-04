import React, { useReducer } from 'react';

const initialState = {
  element: {
    width: '560',
    height: '330',
    backgroundColor: '#F4F4F4',
    borderColor: '#F4F4F4',
    borderRadius: '0',
    borderThickness: '0',
  },
  shadows: [
    {
      offsetX: '17',
      offsetY: '17',
      blur: '0',
      spread: '0',
      color: '#EBEBEB',
    },
  ],
};

interface ElementPayload {
  key: string;
  value: string;
}

interface ShadowPayload extends ElementPayload {
  shadowIndex: number;
}

interface Action {
  type: string;
  payload?: ElementPayload | ShadowPayload;
}

interface Context {
  state: typeof initialState;
  updateState: (payload: Action) => void;
}

export const StoreContext = React.createContext<Context>({} as any);

export const actions = {
  UpdateElement: 'UpdateElement',
  UpdateShadow: 'UpdateShadow',
  AddShadow: 'AddShadow',
}

const StoreProvider = ({ children }) => {
  const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
      case actions.UpdateElement: {
        if (!action.payload) {
          return state;
        }

        return {
          ...state,
          element: {
            ...state.element,
            [action.payload.key]: action.payload.value,
          }
        }
      }

      case actions.UpdateShadow: {
        if (!action.payload) {
          return state;
        }

        const {
          shadowIndex,
          key,
          value
        } = action.payload;

        return {
          ...state,
          shadows: state.shadows.map((shadow, index) => {
            if (index !== shadowIndex) {
              return shadow;
            }

            return {
              ...shadow,
              [key]: value,
            };
          })
        }
      }

      case actions.AddShadow: {
        return {
          ...state,
          shadows: [
            ...state.shadows,
            {
              offsetX: '0',
              offsetY: '0',
              blur: '0',
              spread: '0',
              color: '#EBEBEB',
            },
          ]
        };
      }

      default: {
        return state;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: Context = {
    state,
    updateState: dispatch,
  };


  console.log(state);
  return (
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
  );
}

export default StoreProvider;
