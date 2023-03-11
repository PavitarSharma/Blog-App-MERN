import { createSlice } from "@reduxjs/toolkit";
import blogService from "../../http/blogService";
import commentService from "../../http/commentService";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {},
  reducers: {},
});

export default blogSlice.reducer;
