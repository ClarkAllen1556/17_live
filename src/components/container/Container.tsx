import { ReactNode } from 'react';

import { StyledContainer } from '~/components/container/container.styled';

interface IProps {
  children: ReactNode;
}

export default function Container({ children }: IProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
