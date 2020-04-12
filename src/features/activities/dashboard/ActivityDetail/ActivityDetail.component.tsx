import React, { ReactSVG } from 'react';
import Button from '../../../button/Button.component';
import {
  ActivityDetailContainer,
  ActivityDetailImage,
  ActivityDetailTitle,
  ActivityDetailDate,
  ActivityButtonContainer
} from './ActivityDetail.style';
import { IActivity } from '../../../../app/models/activity';

interface IProps {
  activity?: IActivity | null;
  onEditModeChange: (trueOrFale: boolean) => void;
  onHandleChange: (activity: IActivity | null) => void;
}

const ActivityDetail: React.FC<IProps> = ({
  activity,
  onEditModeChange,
  onHandleChange
}) => {
  const onHandleEdit = () => {
    onEditModeChange(true);
    console.log(activity);
  };

  const onHandleCancelChange = () => {
    onHandleChange(null);
  };

  return (
    <ActivityDetailContainer>
      <ActivityDetailImage
        src={
          activity
            ? `/assets/categoryImages/${activity.category}.jpg`
            : `/assets/placeholder.png`
        }
        alt='placeholder'
      />
      <ActivityDetailTitle className='group'>
        {activity ? activity.title : ''}
      </ActivityDetailTitle>
      <ActivityDetailDate className='group'>
        {activity ? activity.date : ''}
      </ActivityDetailDate>
      <div className='group'>{activity ? activity.description : ''}</div>
      <hr />
      <ActivityButtonContainer>
        <Button name='Edit' color='transparent' onClick={onHandleEdit} />
        <Button
          name='Cancel'
          color='transparent'
          onClick={onHandleCancelChange}
        />
      </ActivityButtonContainer>
    </ActivityDetailContainer>
  );
};

export default ActivityDetail;
