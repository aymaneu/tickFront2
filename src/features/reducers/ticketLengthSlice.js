import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchTicketLengthData = createAsyncThunk(
  "ticketFullLength/fetchTicketLengthData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/ticketLength/${id}`);
    return data;
  }
);

const ticketLengthSlice = createSlice({
  name: "ticketFullLength",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTicketLengthData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchTicketLengthData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchTicketLengthData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default ticketLengthSlice.reducer;
