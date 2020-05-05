import React, { useReducer } from 'react';
import { Theme } from '@styles/theme';

import { Shadow } from '@common/types';

const initialState = {
  playArea: {
    backgroundColor: Theme.colors.white,
  },
  element: {
    width: '560',
    height: '330',
    backgroundColor: Theme.colors.brightTurquoise,
    borderColor: Theme.colors.heather,
    borderRadius: '0',
    borderThickness: '0',
  },
  shadows: [
    {
      id: Date.now(),
      offsetX: '17',
      offsetY: '17',
      blur: '0',
      spread: '0',
      color: '#EBEBEB',
      inset: false,
    },
  ],
};

interface Context {
  state: typeof initialState;
  updateState: (payload: Action) => void;
}

export enum ActionType {
  UpdateElement = 'UpdateElement',
  UpdateShadow = 'UpdateShadow',
  AddShadow = 'AddShadow',
  RemoveShadow = 'RemoveShadow',
  UpdatePlayArea = 'UpdatePlayArea',
  EditPreset = 'EditPreset',
}

type Action =
  | { type: ActionType.AddShadow }
  | { type: ActionType.RemoveShadow; payload: { id: number } }
  | { type: ActionType.UpdateElement; payload: { key: string; value: string | boolean } }
  | { type: ActionType.UpdatePlayArea; payload: { key: string; value: string | boolean } }
  | { type: ActionType.UpdateShadow; payload: { id: number; key: string; value: string | boolean } }
  | { type: ActionType.EditPreset; payload: Array<Shadow> };

export const StoreContext = React.createContext<Context>({} as any);

const StoreProvider = ({ children }) => {
  const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
      case ActionType.UpdateElement: {
        if (!action.payload) {
          return state;
        }

        let { value } = action.payload;
        const { key } = action.payload;

        // This is to prevent users from breaking the playarea constraints
        if (key === 'height') {
          if (Number(value) > window.innerHeight) {
            value = String(window.innerHeight - 200);
          }
        }

        if (key === 'width') {
          if (Number(value) > window.innerWidth - 500) {
            value = String(window.innerWidth - 600);
          }
        }

        return {
          ...state,
          element: {
            ...state.element,
            [key as string]: value,
          },
        };
      }

      case ActionType.UpdatePlayArea: {
        if (!action.payload) {
          return state;
        }

        return {
          ...state,
          playArea: {
            ...state.playArea,
            [action.payload.key]: action.payload.value,
          },
        };
      }

      case ActionType.UpdateShadow: {
        if (!action.payload) {
          return state;
        }

        const { id, key, value } = action.payload;

        return {
          ...state,
          shadows: state.shadows.map((shadow) => {
            if (id !== shadow.id) {
              return shadow;
            }

            return {
              ...shadow,
              [key]: value,
            };
          }),
        };
      }

      case ActionType.AddShadow: {
        return {
          ...state,
          shadows: [
            {
              id: Date.now(),
              offsetX: '0',
              offsetY: '0',
              blur: '0',
              spread: '0',
              color: '#EBEBEB',
              inset: false,
            },
            ...state.shadows,
          ],
        };
      }

      case ActionType.RemoveShadow: {
        return {
          ...state,
          shadows: state.shadows.filter(({ id }) => id !== action.payload.id),
        };
      }

      case ActionType.EditPreset: {
        return {
          ...state,
          shadows: action.payload,
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


  console.log('store', state);
  return (
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
  );
}

export default StoreProvider;
