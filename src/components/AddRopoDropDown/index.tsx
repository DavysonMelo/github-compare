/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayButton from '@clayui/button';
import { FiPlus } from 'react-icons/fi';
import { Container, Content } from './style';

const AddRepoDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <ClayButton displayType="primary" onClick={() => setIsOpen(!isOpen)}>
        <FiPlus size={20} />
      </ClayButton>
      {isOpen && (
        <Content>
          <ClayForm.Group className="group">
            <h4>New repository</h4>
            <label htmlFor="repo">Repository</label>
            <ClayInput component="input" id="repo" type="text" />
          </ClayForm.Group>
          <footer>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default AddRepoDropDown;
