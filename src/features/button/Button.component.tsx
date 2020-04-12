import React from 'react';
import { DefaultButton } from './Button.style';

interface IProps {
  name: string;
  color: string;
  style?: Object;
  onClick?: Function;
}

const Button: React.FC<IProps> = ({ name, color, style, onClick }) => {
  return (
    <DefaultButton color={color} style={style} onClick={onClick}>
      {name}
    </DefaultButton>
  );
};

export default Button;
