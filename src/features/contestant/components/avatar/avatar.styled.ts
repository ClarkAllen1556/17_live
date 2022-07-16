import styled from 'styled-components';

export const StyledAvatar = styled.div<{ profileImage?: string }>`
  background-image: url(${({ profileImage }) => profileImage});
  background-size: 100%;
  background-color: whitesmoke;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  height: 36px;
  width: 36px;
`;
