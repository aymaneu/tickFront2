import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchServiceData = createAsyncThunk(
  "service/fetchServiceData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/getAllService/${id}`);
    return data;
  }
);
const ServiceSlice = createSlice({
  name: "service",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchServiceData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchServiceData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchServiceData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default ServiceSlice.reducer;
