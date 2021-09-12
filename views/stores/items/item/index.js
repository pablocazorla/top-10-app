import { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import ItemEdit from "components/itemEdit";
import ItemView from "components/itemView";

const Item = ({ itemData, idStore, idItem, onEditItem, onDeleteItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="item-container">
        {editMode ? (
          <ItemEdit
            itemData={itemData}
            onCancel={() => {
              setEditMode(false);
            }}
            onSave={(newItemData) => {
              setEditMode(false);
              onEditItem(idStore, idItem, newItemData);
            }}
          />
        ) : (
          <ItemView
            itemData={itemData}
            onEdit={() => {
              setEditMode(true);
            }}
            onDelete={toggleModal}
          />
        )}
      </div>
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalBody className="text-center py-5">
          <h3 className="mb-4">¿Eliminar "{itemData.name}"?</h3>
          <div>
            <Button color="link" onClick={toggleModal}>
              Cancelar
            </Button>{" "}
            <Button
              color="danger"
              onClick={() => {
                toggleModal();
                onDeleteItem(idStore, idItem);
              }}
            >
              Eliminar
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Item;
