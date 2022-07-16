import Avatar from '~/features/contestant/components/avatar/Avatar';
import { StyledContestant } from '~/features/contestant/contestant.styled';
import { StyledRank } from '~/features/contestant/components/rank/rank.styled';
import { IContestant } from '~/common/types/Contestant.interface';
import Score from '~/features/contestant/components/score/Score';
import { useRef } from 'react';

interface IProps {
  contestant: IContestant;
  index: number;
}

export default function Contestant({ contestant, index }: IProps) {
  const rank = useRef<number>(index + 1);

  return (
    <StyledContestant>
      <StyledRank>{rank.current}</StyledRank>
      <Avatar profileImageUrl={contestant.picture} />
      <div>{contestant.displayName}</div>
      <Score score={contestant.score} />
    </StyledContestant>
  );
}
