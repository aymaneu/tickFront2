import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchTicketLengthData2 = createAsyncThunk(
  "ticketFullLength2/fetchTicketLengthData2",
  async () => {
    const { data } = await axios.get(`${API_URL}/getLengthTicket`);
    return data;
  }
);

const ticketLengthSlice2 = createSlice({
  name: "ticketFullLength2",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTicketLengthData2.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchTicketLengthData2.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchTicketLengthData2.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default ticketLengthSlice2.reducer;
