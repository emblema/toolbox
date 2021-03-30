import { createSlice } from "@reduxjs/toolkit";
import apiService from "../services/apiService";

const slice = createSlice({
  name: "results",
  initialState: {
    list: [],
  },
  reducers: {
    resultAdded: (results, action) => {
      results.list.unshift(action.payload);
    },
  },
});

export const { resultAdded } = slice.actions;
export default slice.reducer;

export const requestResult = (text) => (dispatch) => {
  apiService.get(`iecho?text=${text}`).then((res) => {
    const result = {
      text,
      result: res.data.text,
      isPalindrome: res.data.palindrome,
      id: Date.now(),
    };

    dispatch(resultAdded(result));
  });
};
