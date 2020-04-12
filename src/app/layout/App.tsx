import React, { useState, useEffect } from 'react';
import { IActivity } from '../models/activity';
import axios from 'axios';
import NavBar from '../../features/nav/NavBar.component';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard.component';

interface IStates {
  activities: IActivity[];
  acitivity: IActivity;
  editMode: boolean;
}

const App: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [activity, setActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(resp => {
        let activities: IActivity[] = [];
        resp.data.forEach(activity => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity);
        });
        setActivities(activities);
      })
      .catch(err => console.error('error - ', err));
  }, []);

  const onHandleChange = (activity: IActivity | null) => {
    console.log('setting to null');
    setActivity(activity);
  };

  const onEditModeChange = (trueOrFalse: boolean) => {
    setEditMode(trueOrFalse);
  };

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setActivity(activity);
    setEditMode(false);
  };

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    setActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)]);
  };

  return (
    <React.Fragment>
      <NavBar
        onEditModeChange={onEditModeChange}
        onHandleChange={onHandleChange}
      />
      <ActivityDashboard
        activities={activities}
        activity={activity}
        onHandleChange={onHandleChange}
        editMode={editMode}
        onEditModeChange={onEditModeChange}
        handleCreateActivity={handleCreateActivity}
        handleEditActivity={handleEditActivity}
        handleDeleteActivity={handleDeleteActivity}
      />
    </React.Fragment>
  );
};

export default App;
