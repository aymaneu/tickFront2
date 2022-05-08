import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchCompaniesChartData = createAsyncThunk(
  "companyChart/fetchCompaniesChartData",
  async () => {
    const { data } = await axios.get(`${API_URL}/monthlyCompanies`);
    return data;
  }
);

const companyChartSlice = createSlice({
  name: "companyChart",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCompaniesChartData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCompaniesChartData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchCompaniesChartData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default companyChartSlice.reducer;
