import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchCompaniesData = createAsyncThunk(
  "company/fetchCompaniesData",
  async () => {
    const { data } = await axios.get(`${API_URL}/getAllAgencies`);
    return data;
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCompaniesData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCompaniesData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchCompaniesData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default companySlice.reducer;
