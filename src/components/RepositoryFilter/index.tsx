import React, { useState } from 'react';
import ClayDropDown from '@clayui/drop-down';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Container } from './style';

const RepositoryFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ClayDropDown
        active={isOpen}
        onActiveChange={setIsOpen}
        trigger={
          <button type="button" className="trigger">
            {`Filter and order `}{' '}
            {!isOpen ? (
              <IoMdArrowDropdown size={25} className="icon" />
            ) : (
              <IoMdArrowDropup size={25} className="icon" />
            )}
          </button>
        }
      >
        <ClayDropDown.ItemList>
          <ClayDropDown.Group header="ORDER BY">
            <ClayDropDown.Item>Stars</ClayDropDown.Item>
            <ClayDropDown.Item>Forks</ClayDropDown.Item>
            <ClayDropDown.Item>Open Issues</ClayDropDown.Item>
            <ClayDropDown.Item>Age</ClayDropDown.Item>
            <ClayDropDown.Item>Last commit</ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </Container>
  );
};

export default RepositoryFilter;
