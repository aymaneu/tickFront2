import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchCategoryData = createAsyncThunk(
  "category/fetchCategoryData",
  async () => {
    const { data } = await axios.get(`${API_URL}/getAllCategory`);
    return data;
  }
);
export const deleteCategoryData = createAsyncThunk(
  "category/deleteCategoryData",
  async ({ id }) => {
    const { data } = await axios.delete(`${API_URL}/deleteCategory/${id}`);
    return data;
  }
);
export const postCategoryData = createAsyncThunk(
  "category/postCategoryData",
  async ({ id, goBoy }) => {
    const { data } = await axios.post(`${API_URL}/createCategory/${id}`, goBoy);
    return data;
  }
);
export const putCategoryData = createAsyncThunk(
  "category/putCategoryData",
  async ({ id, goBoy }) => {
    const { data } = await axios.put(`${API_URL}/updateCategory/${id}`, goBoy);
    return data;
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCategoryData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCategoryData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchCategoryData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [postCategoryData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [postCategoryData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    },
    [postCategoryData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [deleteCategoryData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [deleteCategoryData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = state.data.filter((category) => category.id !== payload);
    },
    [deleteCategoryData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export default CategorySlice.reducer;
