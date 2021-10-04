import React, { useState } from 'react';
import ClayModal, { useModal } from '@clayui/modal';
import ClayButton from '@clayui/button';
import { FiTrash2, FiAlertTriangle } from 'react-icons/fi';
import { Button } from './style';
import { useListContext } from '../../contexts/listViewContext';

interface Props {
  id: number;
  name: string;
}

const DeleteModal: React.FC<Props> = ({ id, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setIsOpen(false),
  });

  const { deleteRepository } = useListContext();

  return (
    <>
      {isOpen && (
        <ClayModal observer={observer} size="sm" status="warning" center>
          <ClayModal.Header className="warning">
            <FiAlertTriangle size={25} /> Delete Repository
          </ClayModal.Header>
          <ClayModal.Body>
            <p>
              Are you sure you want to delete <strong>{name}</strong>{' '}
              repository?
            </p>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary" onClick={onClose}>
                  Cancel
                </ClayButton>
                <ClayButton
                  className="btn btn-warning"
                  onClick={() => deleteRepository(id)}
                >
                  Delete
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
      <Button
        type="button"
        data-testid="trash-btn"
        onClick={() => setIsOpen(true)}
      >
        <FiTrash2 size={20} color="#6B6C7E" />
      </Button>
    </>
  );
};

export default DeleteModal;
