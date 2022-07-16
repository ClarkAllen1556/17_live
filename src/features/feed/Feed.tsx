import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/common/hooks/store.hooks';
import Contestant from '~/features/contestant/Contestant';
import { populateFeed, setFeed } from '~/features/feed/feed.slice';
import randomInteger from '~/utils/randomInteger';
import { IContestant } from '~/common/types/Contestant.interface';

import { useInterval } from '~/common/hooks/interval.hooks';

export default function Feed() {
  const isLoading = useAppSelector((state) => state.loadingStatus.isLoading);
  const contestants = useAppSelector((state) => state.feed.contestantMap);
  const dispatch = useAppDispatch();

  useInterval(() => {
    const userIds = Object.keys(contestants);
    const index = randomInteger(userIds.length);

    increaseScore(contestants[userIds[index]], randomInteger(1000));
  }, 250);

  useEffect(() => {
    console.log('in use effect');
    dispatch(populateFeed());
  }, []);

  function increaseScore(contestant: IContestant, score: number) {
    dispatch(
      setFeed({
        ...contestants,
        [contestant.userID]: { ...contestant, score: contestant.score + score },
      })
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {Object.entries(contestants).map(([_, value], i) => (
        <Contestant contestant={value} index={i} key={i} />
      ))}
    </>
  );
}
