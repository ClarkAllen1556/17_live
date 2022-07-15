import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  isLoading: boolean;
}

const initialState: ILoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingStatus } = loadingSlice.actions;
export default loadingSlice.reducer;
