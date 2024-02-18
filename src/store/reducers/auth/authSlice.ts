import { createSlice } from "@reduxjs/toolkit";
import { allData } from "../../../staticData/loginData";
type TsignUp = {
  data?: any;
  userInfo: { email: string; password: string } | {};
};

const initialState: TsignUp = {
  data: null,
  userInfo: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.data = action.payload;
      localStorage.setItem("cashDash", JSON.stringify(state.data));
    },
    signUp(state, action) {
      const userInfo = action.payload as { email: string; password: string };
      if (userInfo.email && userInfo.password) {
        state.userInfo = userInfo;
        allData.push(userInfo);
      }
      // localStorage.setItem("cashDash", JSON.stringify(state.userInfo));
    },
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem("cashDash");
    },
  },
});

export const { login, logOut, signUp } = authSlice.actions;

export default authSlice.reducer;
