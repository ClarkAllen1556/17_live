import { Middleware } from '@reduxjs/toolkit';
import { TContestantMap } from '~/common/types/ContestantMap.type';
import { setLoadingStatus } from '~/features/loading/loading.slice';

export const feedMiddleware: Middleware = (storeApi) => (next) => (action) => {
  switch (action.type) {
    case 'feed/populateFeed/pending':
      storeApi.dispatch(setLoadingStatus(true));
      break;
    case 'feed/populateFeed/fulfilled':
      storeApi.dispatch(setLoadingStatus(false));
      break;
    case 'feed/setFeed':
      action.payload = _sortContestantByScore(action.payload);
      break;
  }

  return next(action);
};

function _sortContestantByScore(contestantMap: TContestantMap) {
  return Object.values(contestantMap)
    .sort((a, b) => {
      return b.score - a.score;
    })
    .reduce((prev, cur) => {
      return { ...prev, [cur.userID]: cur };
    }, {});
}
