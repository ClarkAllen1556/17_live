import styled from 'styled-components';

export const StyledProfileImage = styled.div`
  background-image: url(${(props) => props.profileImage});
  background-size: 100%;
  background-color: whitesmoke;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  height: 36px;
  width: 36px;
`;
