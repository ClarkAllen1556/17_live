import Avatar from '~/features/contestant/components/avatar/Avatar';

import { StyledContestant } from '~/features/contestant/contestant.styled';

import { IContestant } from '~/common/types/Contestant.interface';
import Score from '~/features/contestant/components/score/Score';

interface IProps {
  contestant: IContestant;
}

export default function Contestant({ contestant }: IProps) {
  return (
    <StyledContestant>
      <Avatar profileImageUrl={contestant.picture} />
      <div>{contestant.displayName}</div>
      <Score score={contestant.score} />
    </StyledContestant>
  );
}
