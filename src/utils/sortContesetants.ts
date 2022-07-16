import { TContestantMap } from '~/common/types/ContestantMap.type';

export function sortByScore(contestantMap: TContestantMap) {
  return Object.values(contestantMap)
    .sort((a, b) => {
      return b.score - a.score;
    })
    .reduce((prev, cur, i) => {
      return {
        ...prev,
        [cur.userID]: {
          ...cur,
          currentPosition: i,
          previousPosition: cur.currentPosition,
        },
      };
    }, {});
}
