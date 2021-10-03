/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useRef, useState } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayButton from '@clayui/button';
import { FiPlus } from 'react-icons/fi';
import { Container, Content } from './style';
import { useListContext } from '../../contexts/listViewContext';

const AddRepoDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [repo, setRepo] = useState('');
  const { getRepository } = useListContext();

  const addRepository = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getRepository(repo);
  };

  return (
    <Container>
      <ClayButton displayType="primary" onClick={() => setIsOpen(!isOpen)}>
        <FiPlus size={20} />
      </ClayButton>
      {isOpen && (
        <Content onSubmit={e => addRepository(e)}>
          <ClayForm.Group className="group">
            <h4>New repository</h4>
            <label htmlFor="repo">Repository</label>
            <ClayInput
              component="input"
              id="repo"
              type="text"
              value={repo}
              onChange={e => setRepo(e.target.value)}
            />
          </ClayForm.Group>
          <footer>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default AddRepoDropDown;
