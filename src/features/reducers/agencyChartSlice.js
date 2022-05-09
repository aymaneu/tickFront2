import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchAgenciesChartData = createAsyncThunk(
  "agencyChart/fetchAgenciesChartData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/getMonthlyAgency/${id}`);
    return data;
  }
);

const agencyChartSlice = createSlice({
  name: "agencyChart",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAgenciesChartData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAgenciesChartData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchAgenciesChartData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default agencyChartSlice.reducer;
