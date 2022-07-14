import { configureStore } from '@reduxjs/toolkit';

import feedReducer from '~/features/feed/feed.slice';

const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
