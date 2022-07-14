import { StyledAvatar } from '~/features/contestant/components/avatar/avatar.styled.js';

interface IProps {
  profileImageUrl?: string;
}

export default function Avatar({ profileImageUrl }: IProps) {
  return <StyledAvatar profileImage={profileImageUrl} />;
}
