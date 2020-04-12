import styled from 'styled-components';

export const ActivityDetailContainer = styled.div`
  height: 30%;
  div.group {
    padding-left: 15px;
  }
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  -moz-box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  box-shadow: 4px 6px 8px -4px rgba(0, 0, 0, 0.96);
  border: 0.5px solid #cfd3d4;
`;

export const ActivityDetailImage = styled.img`
  width: 25rem;
  height: 20rem;
  width: 100%;
`;

export const ActivityDetailTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const ActivityDetailDate = styled.div`
  color: #bababa;
  padding-bottom: 5px;
`;

export const ActivityButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;
