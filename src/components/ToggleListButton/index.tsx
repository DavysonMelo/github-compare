import React from 'react';
import { BsGridFill } from 'react-icons/bs';
import { Button } from '../../common/CommonComponents';

const ToggleListButton: React.FC = () => {
  return (
    <>
      <Button>
        <BsGridFill size={20} />
      </Button>
    </>
  );
};

export default ToggleListButton;
