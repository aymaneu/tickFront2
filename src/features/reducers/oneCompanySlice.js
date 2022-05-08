import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchOneCompanyData = createAsyncThunk(
  "oneCompany/fetchOneCompanyData",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/getOneAgency/${id}`);
    return data;
  }
);

export const fetchOneCompanyData3 = createAsyncThunk(
  "oneCompany/fetchOneCompanyData3",
  async ({ id }) => {
    const { data } = await axios.get(`${API_URL}/getAgencyDate/${id}`);
    return data;
  }
);

export const pushEditCompany = createAsyncThunk(
  "oneCompany/pushEditCompany",
  async ({ id, goBoy }) => {
    const { data } = await axios.put(`${API_URL}/editAgency/${id}`, goBoy);
    return data;
  }
);
export const postNewCompany = createAsyncThunk(
  "oneCompany/postNewCompany",
  async ({ id, goBoy }) => {
    const { data } = await axios.post(`${API_URL}/addNewAgency/${id}`, goBoy);
    console.log(goBoy);
    return data;
  }
);

const oneCompanySlice = createSlice({
  name: "oneCompany",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchOneCompanyData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchOneCompanyData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchOneCompanyData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [fetchOneCompanyData3.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchOneCompanyData3.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchOneCompanyData3.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [pushEditCompany.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [pushEditCompany.fulfilled]: (state) => {
      state.loading = HTTP_STATUS.FULFILLED;
    },
    [pushEditCompany.rejected]: (state) => {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [postNewCompany.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [postNewCompany.fulfilled]: (state) => {
      state.loading = HTTP_STATUS.FULFILLED;
    },
    [postNewCompany.rejected]: (state) => {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default oneCompanySlice.reducer;
