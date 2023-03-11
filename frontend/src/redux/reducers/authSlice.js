import { createSlice } from "@reduxjs/toolkit";
import authService from "../../http/authService";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export default authSlice.reducer;
