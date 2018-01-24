export const UI_TOGGLE_DRAWER = 'UI_TOGGLE_DRAWER';
export const UI_SHOW_MESSAGE = 'UI_SHOW_MESSAGE';
export const UI_CLOSE_MESSAGE = 'UI_CLOSE_MESSAGE';
export const UI_SHOW_RELOAD_MESSAGE = 'UI_SHOW_RELOAD_MESSAGE';
export const UI_SHOW_LOGIN = 'UI_SHOW_LOGIN';
export const UI_CLOSE_LOGIN = 'UI_CLOSE_LOGIN';

const defaultState = {
  drawerOpened: false,
  modals: {
    login: false
  },
  snackbars: {
    default: {
      opened: false,
      message: ''
    },
    reload: false
  }
};

const global = (state = defaultState, action = {}) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case UI_TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpened: !state.drawerOpened
      };
    case UI_SHOW_MESSAGE:
      return {
        ...state,
        snackbars: {
          ...state.snackbars,
          default: {
            opened: true,
            message: payload
          }
        }
      };
    case UI_CLOSE_MESSAGE:
      return {
        ...state,
        snackbars: {
          ...state.snackbars,
          default: {
            ...defaultState.snackbars.default
          }
        }
      };
    case UI_SHOW_RELOAD_MESSAGE:
      return {
        ...state,
        snackbars: {
          ...state.snackbars,
          reload: true
        }
      };
    case UI_SHOW_LOGIN: {
      return {
        ...state,
        modals: {
          ...state.modals,
          login: true
        }
      };
    }
    case UI_CLOSE_LOGIN: {
      return {
        ...state,
        modals: {
          ...state.modals,
          login: false
        }
      };
    }
    default:
      return state;
  }
};

export default global;
