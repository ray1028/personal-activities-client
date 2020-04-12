import styled from 'styled-components';

export const NavListItem = styled.li`
  list-style-type: none;
  padding: 0 10px;
  margin: 0 10px;
  color: white;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  span {
    margin-left: 10px;
  }
`;
