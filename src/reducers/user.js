export const USER_CONNECT_REQUEST = 'USER_CONNECT_REQUEST';
export const USER_CONNECT_SUCCESS = 'USER_CONNECT_SUCCESS';
export const USER_CONNECT_ERROR = 'USER_CONNECT_ERROR';

export const USER_DISCONNECT_REQUEST = 'USER_DISCONNECT_REQUEST';
export const USER_DISCONNECT_SUCCESS = 'USER_DISCONNECT_SUCCESS';

export const USER_STATE_CONNECTING = 'USER_STATE_CONNECTING';
export const USER_STATE_CONNECTED = 'USER_STATE_CONNECTED';
export const USER_STATE_CONNECTION_ERROR = 'USER_STATE_CONNECTION_ERROR';
export const USER_STATE_DISCONNECTED = 'USER_STATE_DISCONNECTED';
export const USER_STATE_DISCONNECTING = 'USER_STATE_DISCONNECTING';

const defaultState = {
  state: USER_STATE_DISCONNECTED
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case USER_CONNECT_REQUEST:
      return {
        ...state,
        state: USER_STATE_CONNECTING
      };
    case USER_CONNECT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        state: USER_STATE_CONNECTED
      };
    case USER_CONNECT_ERROR:
      return {
        ...state,
        state: USER_STATE_CONNECTION_ERROR
      };
    case USER_DISCONNECT_REQUEST:
      return {
        ...state,
        state: USER_STATE_DISCONNECTING
      };
    case USER_DISCONNECT_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};

export default user;
