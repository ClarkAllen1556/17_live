import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/common/hooks/store.hooks';

import Contestant from '~/features/contestant/Contestant';
import { populateFeed } from '~/features/feed/feed.slice';

export default function Feed() {
  const contestants = useAppSelector((state) => state.feed.contestantList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFeed());
  }, []);

  return (
    <>
      {contestants.map((c) => (
        <Contestant contestant={c} />
      ))}
    </>
  );
}
