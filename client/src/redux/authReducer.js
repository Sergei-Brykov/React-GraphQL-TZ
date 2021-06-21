const initialState = {
  isFetching: true,
  user: null,
  error: "",
};

export const REQUEST = "REQUEST";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_RESPONSE = "AUTH_RESPONSE";
export const AUTH_REJECT = "AUTH_GET_USER_REJECT";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_REJECT = "LOGIN_REJECT";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_RESPONSE = "REGISTRATION_RESPONSE";
export const REGISTRATION_REJECT = "REGISTRATION_REJECT";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true, error: "" };
    case CLEAR_ERROR:
      return { ...state, error: "" };

    case AUTH_RESPONSE:
    case LOGIN_RESPONSE:
    case REGISTRATION_RESPONSE:
      return { ...state, isFetching: false, user: action.data, error: "" };
    case AUTH_REJECT:
      return { ...state, isFetching: false, user: null };
    case LOGIN_REJECT:
    case REGISTRATION_REJECT:
      return { ...state, isFetching: false, user: null, error: action.data };
    default:
      return state;
  }
};

export const requestCreator = () => ({ type: REQUEST });
export const clearErrorCreator = () => ({ type: CLEAR_ERROR });

export const authRequestCreator = () => ({ type: AUTH_REQUEST });
export const authResponseCreator = (data) => ({ type: AUTH_RESPONSE, data });
export const authRejectCreator = () => ({ type: AUTH_REJECT });

export const logInRequestCreator = (data) => ({ type: LOGIN_REQUEST, data });
export const logInResponseCreator = (data) => ({ type: LOGIN_RESPONSE, data });
export const logInRejectCreator = (data) => ({ type: LOGIN_REJECT, data });

export const registrationRequestCreator = (data) => ({
  type: REGISTRATION_REQUEST,
  data,
});
export const registrationResponseCreator = (data) => ({
  type: REGISTRATION_RESPONSE,
  data,
});
export const registrationRejectCreator = (data) => ({
  type: REGISTRATION_REJECT,
  data,
});
