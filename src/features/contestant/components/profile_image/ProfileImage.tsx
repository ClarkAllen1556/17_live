import { StyledProfileImage } from '~/features/contestant/components/profile_image/profileImage.styled.js';

interface IProps {
  profileImageUrl?: string;
}

export default function ProfileImage({ profileImageUrl }: IProps) {
  return <StyledProfileImage profileImage={profileImageUrl} />;
}
