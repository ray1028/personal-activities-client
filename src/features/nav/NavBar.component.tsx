import React from 'react';
import { NavBarContainer, NavList } from './NavBar.style';
import NavItem from './nav-item/NavItem.component';
import Button from '../button/Button.component';
import { IActivity } from '../../app/models/activity';

interface IProps {
  onEditModeChange: (trueOrFalse: boolean) => void;
  onHandleChange: (activity: IActivity | null) => void;
}

const NavBar: React.FC<IProps> = ({ onEditModeChange, onHandleChange }) => {
  const onHandleCreateNew = () => {
    onEditModeChange(true);
    onHandleChange(null);
  };

  return (
    <NavBarContainer>
      <nav>
        <NavList>
          <NavItem>
            <img
              src='/assets/logo.png'
              alt='logo'
              style={{ width: '25px', height: '25px' }}
            />
            <span>Reactivities</span>
          </NavItem>
          <NavItem title={'Activities'}></NavItem>
          <NavItem>
            <Button
              name='Create Activity'
              color='success'
              onClick={onHandleCreateNew}
            />
          </NavItem>
        </NavList>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
