import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  access_token: null,
  refresh_token: null,
  user: null,
  dashboard: null,
};

/*** LOGIN ***/
const authStart = (state, action) => {
  return updateObject(state, {});
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    access_token: action.access_token,
    refresh_token: action.refresh_token,
  });
};
const authLogout = (state, action) => {
  return updateObject(state, {
    access_token: null,
    refresh_token: null,
  });
};
/*** LOGIN ***/

const getUser = (state, action) => {
  return updateObject(state, { user: action.user });
};

const refreshTokenSuccess = (state, action) => {
  return updateObject(state, { access_token: action.access_token });
};

const getDashboardStart = (state, action) => {
  return updateObject(state, {});
};
const getDashboardSuccess = (state, action) => {
  return updateObject(state, { dashboard: action.dashboard });
};
const getDashboardFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /*** LOGIN ***/
    case actionType.AUTH_START:
      return authStart(state, action);
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.AUTH_LOGOUT:
      return authLogout(state, action);
    /*** LOGIN ***/

    case actionType.GET_USER:
      return getUser(state, action);

    /*** REFRESH TOKEN ***/
    case actionType.REFRESH_TOKEN_SUCCESS:
      return refreshTokenSuccess(state, action);

    case actionType.GET_DASHBOARD_START:
      return getDashboardStart(state, action);
    case actionType.GET_DASHBOARD_SUCCESS:
      return getDashboardSuccess(state, action);
    case actionType.GET_DASHBOARD_FAIL:
      return getDashboardFail(state, action);
    default:
      return state;
  }
};

export default reducer;
