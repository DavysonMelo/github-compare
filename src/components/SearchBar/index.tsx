import React, { useRef } from 'react';
import { ClayInput } from '@clayui/form';
import { FiSearch } from 'react-icons/fi';
import { Container, Button } from './style';
import { useListContext } from '../../contexts/listViewContext';

const SearchBar: React.FC = () => {
  const { searchRepo } = useListContext();
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const search = () => {
    searchRepo(inputRef.current.value);
  };

  return (
    <Container>
      <ClayInput.Group>
        <ClayInput.GroupItem>
          <ClayInput
            className="form-control input-group-inset input-group-inset-after"
            aria-label="Search"
            type="text"
            placeholder="Search"
            ref={inputRef}
          />
          <ClayInput.GroupInsetItem after>
            <Button type="button" onClick={search}>
              <FiSearch color="#6B6C7E" />
            </Button>
          </ClayInput.GroupInsetItem>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </Container>
  );
};

export default SearchBar;
