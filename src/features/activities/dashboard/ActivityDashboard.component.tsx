import React, { useState } from 'react';
import { DashBoard, ActivityGrid, DetailForm } from './ActivityDashboard.style';
import ActivityList from './ActivityList.component';
import { IActivity } from '../../../app/models/activity';
import ActivityDetail from './ActivityDetail/ActivityDetail.component';
import ActivityForm from '../form/ActivityForm.component';

interface IProps {
  activities: IActivity[];
  activity: IActivity | null;
  onHandleChange: (activity: IActivity | null) => void;
  editMode: boolean;
  onEditModeChange: (trueOrFalse: boolean) => void;
  handleCreateActivity: (activity: IActivity) => void;
  handleEditActivity: (activity: IActivity) => void;
  handleDeleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  activity,
  onHandleChange,
  editMode,
  onEditModeChange,
  handleCreateActivity,
  handleEditActivity,
  handleDeleteActivity
}) => {
  return (
    <ActivityGrid>
      <DashBoard>
        {activities &&
          activities.map(activity => {
            return (
              <ActivityList
                key={activity.id}
                activity={activity}
                onHanldeChange={onHandleChange}
                onEditModeChange={onEditModeChange}
                handleDeleteActivity={handleDeleteActivity}
              />
            );
          })}
      </DashBoard>
      <DetailForm>
        {activity && !editMode && (
          <ActivityDetail
            activity={activity}
            onEditModeChange={onEditModeChange}
            onHandleChange={onHandleChange}
          />
        )}
        {editMode && (
          <ActivityForm
            key={(activity && activity.id) || 0}
            activity={activity}
            onEditModeChange={onEditModeChange}
            handleCreateActivity={handleCreateActivity}
            handleEditActivity={handleEditActivity}
          />
        )}
      </DetailForm>
    </ActivityGrid>
  );
};

export default ActivityDashboard;
