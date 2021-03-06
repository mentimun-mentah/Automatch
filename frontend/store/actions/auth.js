import Router from "next/router";
import cookie from "nookies";
import axios from "../axios-instance";
import swal from "sweetalert";
import * as actionType from "./actionTypes";

/*** AUTH ***/
export const authStart = () => {
  return { type: actionType.AUTH_START };
};
export const authSuccess = (access_token, refresh_token) => {
  return {
    type: actionType.AUTH_SUCCESS,
    access_token: access_token,
    refresh_token: refresh_token,
  };
};
export const authlogout = () => {
  return { type: actionType.AUTH_LOGOUT };
};
export const refreshTokenSuccess = (access_token) => {
  return { type: actionType.REFRESH_TOKEN_SUCCESS, access_token: access_token };
};
/*** AUTH ***/
export const getUserSuccess = (user) => {
  return { type: actionType.GET_USER, user: user };
};

export const getDashboardStart = () => {
  return { type: actionType.GET_DASHBOARD_START };
};
export const getDashboardSuccess = (dashboard) => {
  return { type: actionType.GET_DASHBOARD_SUCCESS, dashboard: dashboard };
};
export const getDashboardFail = (error) => {
  return { type: actionType.GET_DASHBOARD_FAIL, error: error };
};

export const searchJobStart = () => {
  return { type: actionType.SEARCH_JOB_START };
};
export const searchJobSuccess = (jobs) => {
  return { type: actionType.SEARCH_JOB_SUCCESS, jobs: jobs };
};
export const searchJobFail = (error) => {
  return { type: actionType.SEARCH_JOB_FAIL, error: error };
};

export const getUser = (access_token) => {
  return (dispatch) => {
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    if (access_token) {
      axios
        .get("/user", headerCfg)
        .then((res) => {
          dispatch(getUserSuccess(res.data));
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            console.log("error get user ==> ", err.response);
            cookie.destroy(null, "access_token");
            cookie.destroy(null, "refresh_token");
            dispatch(logout());
            Router.replace("/");
            Router.reload();
          }
        });
    }
  };
};

export const logout = (ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    if (access_token) {
      axios
        .delete("/logout", headerCfg)
        .then(() => {
          dispatch(authlogout());
          ctx.res.writeHead(302, { Location: "/" });
          ctx.res.end()
          window.location.reload("/");
          //Router.reload("/");
        })
        .catch((err) => {
          console.log("logout error", err.response);
        });
    }
  };
};

export const refreshToken = (refresh_token, ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${refresh_token}` } };
    if (access_token && refresh_token) {
      axios
        .post("/refresh", null, headerCfg)
        .then((res) => {
          cookie.set(null, "access_token", res.data.access_token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          dispatch(refreshTokenSuccess(res.data.access_token));
        })
        .catch((error) => {
          console.log("refreshToken ===> ", error.response);
        });
    }
  };
};

export const authCheckState = (ctx) => {
  return (dispatch) => {
    dispatch(authStart());
    const { access_token } = cookie.get(ctx);
    if (access_token) {
      const { refresh_token } = cookie.get(ctx);
      if (refresh_token) {
        dispatch(authSuccess(access_token, refresh_token));
      }
    } else {
      dispatch(authlogout());
    }
  };
};

export const changeAvatar = (avatar, ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    dispatch(getUser(access_token));
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    let formData = new FormData();
    formData.append("avatar", avatar);
    axios
      .put("/change-avatar", formData, headerCfg)
      .then((res) => {
        swal({ text: res.data.message, icon: "success" });
        console.log("changeAvatarSuccess => ", res.data);
      })
      .catch((err) => {
        swal({ text: err.response.data.avatar[0], icon: "error" });
        console.log("changeAvatarFail => ", err.response);
      });
  };
};

export const getDashboard = (ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    dispatch(getUser(access_token));
    dispatch(getDashboardStart());
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get("/dashboard-user", headerCfg)
      .then((res) => {
        dispatch(getDashboardSuccess(res.data));
        console.log("getDashboardSuccess => ", res.data);
      })
      .catch((err) => {
        dispatch(getDashboardFail(err.response));
        console.log("getDashboardFail => ", err.response);
      });
  };
};

export const searchJob = (page, search, ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios.get(`/dashboard-user/jobs?page=${page}&q=${search}`, headerCfg).then((res) => {
      dispatch(searchJobSuccess(res.data));
    })
    .catch(err => {
      console.log("searchJob catch => ", err.response)
    })
  };
};
