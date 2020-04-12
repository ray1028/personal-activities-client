import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 79%,
    rgb(32, 167, 172) 89%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
