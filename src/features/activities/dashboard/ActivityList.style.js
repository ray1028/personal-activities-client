import styled from 'styled-components';

export const ActivityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #f3f3f3;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ActivityListTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const ActivityListDate = styled.div`
  font-weight: light;
  font-size: 0.8rem;
  color: #9fa2a6;
  margin-bottom: 5px;
`;

export const ActivityListDefaultText = styled.div`
  font-size: 0.9rem;
`;

export const ActivityListButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActivityListCategory = styled.div`
  border: 0.5px solid #bababa;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 50px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`;
