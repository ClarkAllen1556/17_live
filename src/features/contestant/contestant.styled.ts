import styled from 'styled-components';

export const StyledContestant = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  position: absolute;
  height: 48px;
  width: 320px;
  top: ${(props) => props.position * 48}px;
`;
