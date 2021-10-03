import React, { useState } from 'react';
import ClayDropDown from '@clayui/drop-down';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { Button } from '../../common/CommonComponents';
import { useListContext } from '../../contexts/listViewContext';

const ToggleListButton: React.FC = () => {
  const { listType, setListType } = useListContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ClayDropDown
        active={isOpen}
        onActiveChange={setIsOpen}
        trigger={
          <Button type="button" className="trigger">
            {listType === 'grid' ? (
              <Button type="button">
                <BsFillGridFill size={20} />
              </Button>
            ) : (
              <Button type="button">
                <FaThList size={20} />
              </Button>
            )}
          </Button>
        }
      >
        <ClayDropDown.ItemList>
          <ClayDropDown.Group>
            <ClayDropDown.Item
              onClick={() => {
                setListType('grid');
                setIsOpen(false);
              }}
            >
              <BsFillGridFill size={20} />
              <span style={{ marginLeft: 10 }}>Cards</span>
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => {
                setListType('list');
                setIsOpen(false);
              }}
            >
              <FaThList size={20} />
              <span style={{ marginLeft: 10 }}>List</span>
            </ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </>
  );
};

export default ToggleListButton;
