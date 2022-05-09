import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchAgencyLengthData2 = createAsyncThunk(
  "agencyLength2/fetchAgencyLengthData2",
  async () => {
    const { data } = await axios.get(`${API_URL}/getLengthAgency`);
    return data;
  }
);

const agencyLengthSlice2 = createSlice({
  name: "agencyLength2",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAgencyLengthData2.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAgencyLengthData2.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchAgencyLengthData2.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default agencyLengthSlice2.reducer;
