import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/common/hooks/store.hooks';
import Contestant from '~/features/contestant/Contestant';
import { populateFeed, setFeed } from '~/features/feed/feed.slice';
import randomInteger from '~/utils/randomInteger';
import { IContestant } from '~/common/types/Contestant.interface';

import { useInterval } from '~/common/hooks/interval.hooks';
import styled, { keyframes } from 'styled-components';

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
    <StyledOrderedList>
      {Object.entries(contestants).map(([_, value], i) => (
        <StyledListItem
          currentPosition={value.currentPosition}
          previousPosition={value.previousPosition}
        >
          <Contestant contestant={value} index={i} key={i} />
        </StyledListItem>
      ))}
    </StyledOrderedList>
  );
}

const StyledOrderedList = styled.ol`
  list-style-type: none;
`;

const StyledListItem = styled.li<{
  previousPosition: number;
  currentPosition: number;
}>`
  position: absolute;
  height: 48px;
  width: 320px;
  top: ${({ currentPosition }) => currentPosition * 48}px;
  animation: ${({ previousPosition, currentPosition }) =>
      _moveContestant(previousPosition, currentPosition)}
    0.5s ease;
`;

const _moveContestant = (prev: number, cur: number) => keyframes`
  from {
    top ${prev * 48}px;
  }
  
  to {
    top ${cur * 48}px;
  }
`;
