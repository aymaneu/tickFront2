import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchAgencyLengthData = createAsyncThunk(
  "agencyLength/fetchAgencyLengthData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/agencyLength/${id}`);
    return data;
  }
);

const agencyLengthSlice = createSlice({
  name: "agencyLength",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAgencyLengthData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAgencyLengthData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchAgencyLengthData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default agencyLengthSlice.reducer;
