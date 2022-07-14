import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/common/hooks/store.hooks';

import Contestant from '~/features/contestant/Contestant';
import { populateFeed, setFeed } from '~/features/feed/feed.slice';

export default function Feed() {
  const contestants = useAppSelector((state) => state.feed.contestantMap);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFeed());
  }, []);

  function increaseScore(index: number) {
    // dispatch(setFeed());
  }

  return (
    <>
      {Object.entries(contestants).map(([key, value], i) => (
        <Contestant contestant={value} key={i} />
      ))}
    </>
  );
}
