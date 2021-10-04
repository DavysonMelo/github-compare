import React, { useState } from 'react';
import ClayDropDown from '@clayui/drop-down';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Container } from './style';
import { useListContext } from '../../contexts/listViewContext';

const RepositoryFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onChangeFilter } = useListContext();

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
            <ClayDropDown.Item onClick={() => onChangeFilter('stars')}>
              Stars
            </ClayDropDown.Item>
            <ClayDropDown.Item onClick={() => onChangeFilter('forks')}>
              Forks
            </ClayDropDown.Item>
            <ClayDropDown.Item onClick={() => onChangeFilter('openIssues')}>
              Open Issues
            </ClayDropDown.Item>
            <ClayDropDown.Item onClick={() => onChangeFilter('age')}>
              Age
            </ClayDropDown.Item>
            <ClayDropDown.Item onClick={() => onChangeFilter('lastCommit')}>
              Last commit
            </ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </Container>
  );
};

export default RepositoryFilter;
