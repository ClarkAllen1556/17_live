import { StyledScore } from '~/features/contestant/components/score/score.styled';
import CountUp from 'react-countup';

import { usePreviousValue } from '~/common/hooks/previousValue.hooks';

interface IProps {
  score: number;
}

export default function Score({ score }: IProps) {
  const previousValue = usePreviousValue(score);

  return (
    <StyledScore>
      <CountUp start={previousValue} end={score} duration={5} />
    </StyledScore>
  );
}
