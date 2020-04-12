import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: ${prop => {
    if (prop.color === 'success') {
      return '#49eb34';
    } else if (prop.color === 'primary') {
      return '#0c6dcf';
    } else if (prop.color === 'danger') {
      return '#ff2d26';
    } else {
      return '#0c6dcf';
    }
  }};
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-family: arial, sans-serif;
  font-size: 1rem;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 60px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
