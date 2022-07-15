import { Middleware } from '@reduxjs/toolkit';
import { IContestant } from '~/common/types/Contestant.interface';
import { setLoadingStatus } from '~/features/loading/loading.slice';

export const feedMiddleware: Middleware = (storeApi) => (next) => (action) => {
  // let resultState = next(action);

  switch (action.type) {
    case 'feed/populateFeed/pending':
      storeApi.dispatch(setLoadingStatus(true));
      break;
    case 'feed/populateFeed/fulfilled':
      storeApi.dispatch(setLoadingStatus(false));
      break;
  }

  return next(action);
};
