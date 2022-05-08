import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchTicketData = createAsyncThunk(
  "ticket/fetchTicketData",
  async () => {
    const { data } = await axios.get(`${API_URL}/getAllTicket`);
    return data;
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTicketData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchTicketData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchTicketData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default ticketSlice.reducer;
