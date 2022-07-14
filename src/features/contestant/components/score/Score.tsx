import { StyledScore } from '~/features/contestant/components/score/score.styled';

interface IProps {
  score: number;
}

export default function Score({ score }: IProps) {
  return <StyledScore>{score}</StyledScore>;
}
