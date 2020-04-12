import React, { ReactNode } from 'react';
import { NavListItem } from './NavItem.style';

interface IProps {
  title?: string;
  children?: ReactNode;
}

const NavItem: React.FC<IProps> = ({ title, children }) => {
  return <NavListItem>{children ? children : title}</NavListItem>;
};

export default NavItem;
