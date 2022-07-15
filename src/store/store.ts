import { configureStore } from '@reduxjs/toolkit';

import feedReducer from '~/features/feed/feed.slice';
import { feedMiddleware } from '~/utils/middleware/feed.middle';
import loadingReducer from '~/features/loading/loading.slice';

const store = configureStore({
  reducer: {
    feed: feedReducer,
    loadingStatus: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
