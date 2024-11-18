
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  isAuthenticated?: boolean;
  loggedUserInfos?: object | null;
  token?: string;
};

const initialState: Auth = {
  isAuthenticated: false,
  loggedUserInfos: null,
  token: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      return state;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      return state;
    },
    loginReducer: (state, action: PayloadAction<Auth>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      if (action.payload.loggedUserInfos) {
        state.loggedUserInfos = action.payload.loggedUserInfos;
      }
      return state;
    },

    logout: () => {
      return initialState;
    },

  },
});

export const {
  loginReducer,
  logout,
  setIsAuthenticated,
  updateToken,
} = authSlice.actions;

export default authSlice.reducer;