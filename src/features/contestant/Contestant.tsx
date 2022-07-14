import ProfileImage from '~/features/contestant/components/profile_image/ProfileImage';

import { IContestant } from '~/common/types/Contestant.interface';

interface IProps {
  contestant: IContestant;
}

export default function Contestant({ contestant }: IProps) {
  return (
    <div>
      <ProfileImage profileImageUrl={contestant.picture} />
      <div>{contestant.displayName}</div>
    </div>
  );
}
