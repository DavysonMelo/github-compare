import React from 'react';
import { ClayInput } from '@clayui/form';
import { FiSearch } from 'react-icons/fi';
import { Container, Button } from './style';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <ClayInput.Group>
        <ClayInput.GroupItem>
          <ClayInput
            className="form-control input-group-inset input-group-inset-after"
            aria-label="Search"
            type="text"
            placeholder="Search"
          />
          <ClayInput.GroupInsetItem after>
            <Button type="button">
              <FiSearch color="#6B6C7E" />
            </Button>
          </ClayInput.GroupInsetItem>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </Container>
  );
};

export default SearchBar;
