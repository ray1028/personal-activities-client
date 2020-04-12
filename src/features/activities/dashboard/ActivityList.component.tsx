import React from 'react';
import {
  ActivityListContainer,
  ActivityListTitle,
  ActivityListDate,
  ActivityListDefaultText,
  ActivityListButtonContainer,
  ActivityListCategory
} from './ActivityList.style';
import { IActivity } from '../../../app/models/activity';
import Button from '../../button/Button.component';

interface IProps {
  activity: IActivity;
  onHanldeChange: (activity: IActivity) => void;
  onEditModeChange: (trueOrFalse: boolean) => void;
  handleDeleteActivity: (id: string) => void;
}

const ActivityList: React.FC<IProps> = ({
  activity,
  onHanldeChange,
  onEditModeChange,
  handleDeleteActivity
}) => {
  const onClickHandle = () => {
    onEditModeChange(false);
    onHanldeChange(activity);
  };

  const onHandleDelete = () => {
    handleDeleteActivity(activity.id);
  };

  return (
    <ActivityListContainer>
      <ActivityListTitle>{activity.title}</ActivityListTitle>
      <ActivityListDate>{activity.date}</ActivityListDate>
      <ActivityListDefaultText>{activity.description}</ActivityListDefaultText>
      <ActivityListDefaultText>
        {activity.city}, {activity.venue}
      </ActivityListDefaultText>
      <ActivityListButtonContainer>
        <ActivityListCategory>{activity.category}</ActivityListCategory>
        <div>
          <span>
            <Button name='Delete' color='danger' onClick={onHandleDelete} />
          </span>
          <span>
            <Button name='View' color='primary' onClick={onClickHandle} />
          </span>
        </div>
      </ActivityListButtonContainer>
    </ActivityListContainer>
  );
};

export default ActivityList;
