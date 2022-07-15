import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IContestant } from '~/common/types/Contestant.interface';
import { TContestantMap } from '~/common/types/ContestantMap.type';
import { fetchContestants } from '~/common/api/contestant.api';

interface IFeedState {
  contestantMap: TContestantMap;
}

const initialState: IFeedState = {
  contestantMap: {},
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeed: (state, action: PayloadAction<TContestantMap>) => {
      state.contestantMap = action.payload;
    },
    updateContestant: (state, action: PayloadAction<IContestant>) => {
      state.contestantMap = {
        ...state.contestantMap,
        [action.payload.userID]: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(populateFeed.fulfilled, (state, action) => {
      state.contestantMap = _createContestantMap(action.payload);
    });
  },
});

export const populateFeed = createAsyncThunk(
  'feed/populateFeed',
  async (): Promise<IContestant[]> => {
    return await fetchContestants();
  }
);

export const { setFeed, updateContestant } = feedSlice.actions;
export default feedSlice.reducer;

function _createContestantMap(contestants: IContestant[]): TContestantMap {
  return contestants.reduce((prev, cur) => {
    return { ...prev, [cur.userID]: cur };
  }, {});
}
