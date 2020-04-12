import styled from 'styled-components';

export const ActivityGrid = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 20px;
  margin-top: 7em;
  margin-left: 5em;
`;

export const DashBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  -webkit-box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  -moz-box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  border: 0.5px solid #cfd3d4;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: white;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: auto;
`;

export const DetailForm = styled.div`
  grid-column: 5 / 8;
  grid-row: 1 / 4;
`;
