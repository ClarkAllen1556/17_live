import { StyledProfileScore } from '~/features/contestant/components/profile_score/profileScore.styled';

interface IProps {
  score: number;
}

export default function ProfileScore({ score }: IProps) {
  return <StyledProfileScore>{score}</StyledProfileScore>;
}
