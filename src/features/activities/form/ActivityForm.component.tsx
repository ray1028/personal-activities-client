import React, { useState, useEffect } from 'react';
import { Segment, Form } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import Button from '../../button/Button.component';
import { FormButtonContainer } from './Activity.style';
import { v4 as uuid } from 'uuid';

interface IProps {
  activity: IActivity | null;
  onEditModeChange: (trueOrFalse: boolean) => void;
  handleCreateActivity: (activity: IActivity) => void;
  handleEditActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
  activity: inputActivity,
  onEditModeChange,
  handleCreateActivity,
  handleEditActivity
}) => {
  const initilizeForm = (inputActivity: IActivity | null): IActivity => {
    if (inputActivity) {
      return inputActivity;
    } else {
      const currentActivity: IActivity = {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
      };
      return currentActivity;
    }
  };

  const [activity, setActivity] = useState<IActivity>(
    initilizeForm(inputActivity)
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = () => {
    if (!activity.id.length) {
      let newActivity = {
        ...activity,
        id: uuid()
      };
      handleCreateActivity(newActivity);
    } else {
      handleEditActivity(activity);
    }
    onHandleCancel();
  };

  const onHandleCancel = () => {
    onEditModeChange(false);
  };

  return (
    <Segment>
      {activity && (
        <Form onSubmit={handleSubmit}>
          <Form.Input
            onChange={e => handleInputChange(e)}
            placeholder='Title'
            value={activity.title}
            name='title'
          ></Form.Input>
          <Form.TextArea
            onChange={e => handleInputChange(e)}
            row={2}
            placeholder='Description'
            value={activity.description}
            name='description'
          ></Form.TextArea>
          <Form.Input
            onChange={e => handleInputChange(e)}
            placeholder='Category'
            value={activity.category}
            name='category'
          ></Form.Input>
          <Form.Input
            type='datetime-local'
            placeholder='Date'
            value={activity.date}
            name='date'
          ></Form.Input>
          <Form.Input
            onChange={e => handleInputChange(e)}
            placeholder='City'
            value={activity.city}
            name='city'
          ></Form.Input>
          <Form.Input
            onChange={e => handleInputChange(e)}
            placeholder='Venue'
            value={activity.venue}
            name='venue'
          ></Form.Input>
          <FormButtonContainer>
            <Button color='cancel' name='Cancel' onClick={onHandleCancel} />
            <Button color='success' name='Submit' onClick={handleSubmit} />
          </FormButtonContainer>
        </Form>
      )}
    </Segment>
  );
};

export default ActivityForm;
