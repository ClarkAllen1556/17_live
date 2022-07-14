import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IContestant } from '~/common/types/Contestant.interface';
import { fetchContestants } from '~/common/api/contestant.api';

interface IFeedState {
  contestantList: IContestant[];
}

const initialState: IFeedState = {
  contestantList: [],
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(populateFeed.fulfilled, (state, action) => {
      state.contestantList = action.payload;
    });
  },
});

export const populateFeed = createAsyncThunk(
  'feed/populateFeed',
  async (): Promise<IContestant[]> => {
    return await fetchContestants();
  }
);

export default feedSlice.reducer;
