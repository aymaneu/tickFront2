import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchAgenciesData = createAsyncThunk(
  "agency/fetchAgenciesData",
  async () => {
    const { data } = await axios.get(`${API_URL}/getAllAgencies`);
    return data;
  }
);

const agencySlice = createSlice({
  name: "agency",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAgenciesData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAgenciesData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchAgenciesData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default agencySlice.reducer;
