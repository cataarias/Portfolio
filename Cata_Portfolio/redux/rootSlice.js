import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  portfolioData: null,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const { showLoading, hideLoading, setPortfolioData } = rootSlice.actions;

export default rootSlice.reducer;






