import styled, { keyframes } from 'styled-components';

export const StyledOrderedList = styled.ol`
  list-style: none;
`;

export const StyledListItem = styled.li<{
  previousPosition: number;
  currentPosition: number;
}>`
  position: absolute;
  height: 48px;
  width: 320px;
  top: ${({ currentPosition }) => currentPosition * 48}px;
  animation: ${({ previousPosition, currentPosition }) =>
      _moveContestant(previousPosition, currentPosition)}
    0.3s ease 0s;
`;

const _moveContestant = (prev: number, cur: number) => keyframes`
  from {
    top ${prev * 48}px;
  }
  
  to {
    top ${cur * 48}px;
  }
`;
