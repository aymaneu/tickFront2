import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchServiceLengthData = createAsyncThunk(
  "serviceFullLength/fetchServiceLengthData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/serviceLength/${id}`);
    return data;
  }
);

const serviceLengthSlice = createSlice({
  name: "serviceFullLength",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchServiceLengthData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchServiceLengthData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchServiceLengthData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default serviceLengthSlice.reducer;
