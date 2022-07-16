import { Middleware } from '@reduxjs/toolkit';
import { setLoadingStatus } from '~/features/loading/loading.slice';
import { sortByScore } from '~/utils/sortContesetants';

export const feedMiddleware: Middleware = (storeApi) => (next) => (action) => {
  switch (action.type) {
    case 'feed/populateFeed/pending':
      storeApi.dispatch(setLoadingStatus(true));
      break;
    case 'feed/populateFeed/fulfilled':
      storeApi.dispatch(setLoadingStatus(false));
      break;
    case 'feed/setFeed':
      action.payload = sortByScore(action.payload);
      break;
  }

  return next(action);
};
