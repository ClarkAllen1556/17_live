import Avatar from '~/features/contestant/components/avatar/Avatar';
import { StyledContestant } from '~/features/contestant/contestant.styled';
import { IContestant } from '~/common/types/Contestant.interface';
import Score from '~/features/contestant/components/score/Score';

interface IProps {
  contestant: IContestant;
  index: number;
}

export default function Contestant({ contestant, index }: IProps) {
  const rank = index + 1;

  return (
    <StyledContestant position={index}>
      <div>{rank}</div>
      <Avatar profileImageUrl={contestant.picture} />
      <div>{contestant.displayName}</div>
      <Score score={contestant.score} />
    </StyledContestant>
  );
}
