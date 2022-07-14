import ProfileImage from '~/features/contestant/components/profile_image/ProfileImage';

import { StyledContestant } from '~/features/contestant/contestant.styled';

import { IContestant } from '~/common/types/Contestant.interface';
import ProfileScore from '~/features/contestant/components/profile_score/ProfileScore';

interface IProps {
  contestant: IContestant;
}

export default function Contestant({ contestant }: IProps) {
  return (
    <StyledContestant>
      <ProfileImage profileImageUrl={contestant.picture} />
      <div>{contestant.displayName}</div>
      <ProfileScore score={contestant.score} />
    </StyledContestant>
  );
}
