import { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import ItemEdit from "components/itemEdit";

const CreateItem = ({ onAddItem, idStore }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="create-item">
      {open ? (
        <>
          <hr className="mb-2" />
          <h5 className="mb-3">Nuevo item:</h5>
          <ItemEdit
            inFocusStart
            onCancel={() => {
              setOpen(false);
            }}
            onSave={(newItemData) => {
              setOpen(false);
              onAddItem(idStore, newItemData);
            }}
          />
        </>
      ) : (
        <div className="text-center">
          <Button
            color="primary"
            outline
            onClick={() => {
              setOpen(true);
            }}
          >
            <i className="fa fa-rebel me-2" />
            Nuevo Item
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateItem;
