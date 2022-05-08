import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchOneCompanyDateData = createAsyncThunk(
  "oneCompany/fetchOneCompanyData2",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/getCompanyDate/${id}`);
    return data;
  }
);

const companyDateSlice = createSlice({
  name: "companyDate",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchOneCompanyDateData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchOneCompanyDateData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchOneCompanyDateData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default companyDateSlice.reducer;
