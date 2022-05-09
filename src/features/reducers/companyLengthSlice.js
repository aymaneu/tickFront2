import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchCompaniesLengthData = createAsyncThunk(
  "companyLength/fetchCompaniesLengthData",
  async () => {
    const { data } = await axios.get(`${API_URL}/getLengthCompany`);
    return data;
  }
);
const companyLengthSlice = createSlice({
  name: "companyLength",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCompaniesLengthData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCompaniesLengthData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchCompaniesLengthData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});
export default companyLengthSlice.reducer;
