import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("AUTH REDUCER", () => {
  it("should return initial state if actionTypes is 'undefined'", () => {
    expect(reducer(undefined, {})).toEqual({
      access_token: null,
      refresh_token: null,
      user: null,
      dashboard: null,
      jobs: null,
    });
  });

  it("should return nothing if 'actionTypes.AUTH_START'", () => {
    expect(
      reducer(
        {
          access_token: null,
          refresh_token: null,
          user: null,
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.AUTH_START,
        }
      )
    ).toEqual({
      access_token: null,
      refresh_token: null,
      user: null,
      dashboard: null,
      jobs: null,
    });
  });

  it("should return access_token and refresh_token if 'actionTypes.AUTH_SUCCESS'", () => {
    expect(
      reducer(
        {
          access_token: null,
          refresh_token: null,
          user: null,
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          access_token: "access_token",
          refresh_token: "refresh_token",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: null,
      dashboard: null,
      jobs: null,
    });
  });

  it("should return access_token and refresh_token to null if 'actionTypes.AUTH_LOGOUT'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: null,
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.AUTH_LOGOUT,
          access_token: null,
          refresh_token: null,
        }
      )
    ).toEqual({
      access_token: null,
      refresh_token: null,
      user: null,
      dashboard: null,
      jobs: null,
    });
  });

  it("should get user data if 'actionTypes.GET_USER'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: null,
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.GET_USER,
          user: "user-data",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
    });
  });

  it("should return new access_token if 'actionTypes.REFRESH_TOKEN_SUCCESS'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.REFRESH_TOKEN_SUCCESS,
          access_token: "new_access_token",
        }
      )
    ).toEqual({
      access_token: "new_access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
    });
  });

  it("should return nothing if 'actionTypes.GET_DASHBOARD_START'", () => {
    expect(
      reducer(
        {
          access_token: "new_access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.GET_DASHBOARD_START,
        }
      )
    ).toEqual({
      access_token: "new_access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
    });
  });

  it("should return dashboard data if 'actionTypes.GET_DASHBOARD_SUCCESS'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
        },
        {
          type: actionTypes.GET_DASHBOARD_SUCCESS,
          dashboard: "dashboard-data",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: "dashboard-data",
      jobs: null,
    });
  });

  it("should return error if 'actionTypes.GET_DASHBOARD_FAIL'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
          error: null,
        },
        {
          type: actionTypes.GET_DASHBOARD_FAIL,
          error: "some-error",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
      error: "some-error",
    });
  });

  it("should return error to null again if 'actionTypes.SEARCH_JOB_START'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
          error: "some-error",
        },
        {
          type: actionTypes.SEARCH_JOB_START,
          error: null,
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
      error: null,
    });
  });

  it("should return jobs data if 'actionTypes.SEARCH_JOB_SUCCESS'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: "dashboard-data",
          jobs: null,
        },
        {
          type: actionTypes.SEARCH_JOB_SUCCESS,
          jobs: "jobs-data",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: "dashboard-data",
      jobs: "jobs-data",
    });
  });

  it("should return error if search job error and 'actionTypes.SEARCH_JOB_FAIL'", () => {
    expect(
      reducer(
        {
          access_token: "access_token",
          refresh_token: "refresh_token",
          user: "user-data",
          dashboard: null,
          jobs: null,
          error: null,
        },
        {
          type: actionTypes.SEARCH_JOB_FAIL,
          error: "some-error",
        }
      )
    ).toEqual({
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: "user-data",
      dashboard: null,
      jobs: null,
      error: "some-error",
    });
  });
});
