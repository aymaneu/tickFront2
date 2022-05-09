import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchCompaniesCategoryData = createAsyncThunk(
  "companyCategory/fetchCompaniesCategoryData",
  async ({ id }) => {
    const { data } = await axios.get(
      `${API_URL}/getAllCompaniesByCategory/${id}`
    );
    return data;
  }
);

const companyCaSlice = createSlice({
  name: "companyCategory",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCompaniesCategoryData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCompaniesCategoryData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchCompaniesCategoryData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default companyCaSlice.reducer;
