/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useRef, useState } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayButton from '@clayui/button';
import { FiPlus } from 'react-icons/fi';
import { AiFillInfoCircle } from 'react-icons/ai';
import { Container, Content } from './style';
import { useListContext } from '../../contexts/listViewContext';
import * as Api from '../../api/repo';

const AddRepoDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState('');
  const { setRepositories, repositories } = useListContext();

  const getRepository = async (key: string) => {
    if (key.length === 0) {
      return false;
    }
    setError('');
    if (key.split('/').length > 1) {
      try {
        const response = await Api.getRepo(key);
        if (Object.keys(response).length === 0) {
          throw new Error('Could not find reposoritory!');
        }
        setRepositories([...repositories, response]);
        setIsOpen(false);
      } catch (exception: any) {
        setError(exception.message);
      }
    } else {
      try {
        const response = await Api.getUserRepos(key);
        console.log(response);
        if (response.length === 0) {
          throw new Error('Could not find reposoritory!');
        }
        setRepositories([...repositories, ...response]);
        setIsOpen(false);
      } catch (exception: any) {
        setError(exception.message);
      }
    }
    return true;
  };

  const addRepository = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    getRepository(inputRef.current.value || '');
    inputRef.current.value = '';
  };

  return (
    <Container>
      <ClayButton displayType="primary" onClick={() => setIsOpen(!isOpen)}>
        <FiPlus size={20} />
      </ClayButton>
      {isOpen && (
        <Content onSubmit={addRepository}>
          <ClayForm.Group className="group">
            <h4>New repository</h4>
            <label htmlFor="repo">
              Repository <span className="danger">*</span>
            </label>
            <ClayInput
              component="input"
              id="repo"
              type="text"
              required
              ref={inputRef}
            />
            {error && (
              <p className="text-danger mt-2">
                <AiFillInfoCircle size={20} />
                <span className="ml-2">{error}</span>
              </p>
            )}
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
