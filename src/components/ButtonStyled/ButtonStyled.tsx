import { Button } from '@mui/material';
import React, { ReactNode } from 'react';

interface ButtonStyledStyledProps {
  icon: ReactNode;
  onClick?: () => void;
  texto: string

}

const ButtonStyled: React.FC<ButtonStyledStyledProps> = ({ icon, onClick, texto }) => {
  return (
    <Button variant='contained' startIcon={icon} onClick={onClick}>
      {texto}
    </Button>
  );
};

export default ButtonStyled;
