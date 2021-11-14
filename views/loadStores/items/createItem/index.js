import { useState, useRef } from "react";
import classnames from "classnames";
import { Button } from "reactstrap";
import ItemCreator from "components/itemCreator";

const CreateItem = ({ onAddItem, idStore, data }) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  const setFocus = () => {
    setTimeout(() => {
      if (btnRef && btnRef.current) {
        btnRef.current.focus();
      }
    }, 120);
  };

  return (
    <div className="create-item">
      {open ? (
        <>
          <hr className="mb-2" />
          <h5 className="mb-3">Nuevo item:</h5>
          <ItemCreator
            data={data}
            inFocusStart
            onCancel={() => {
              setFocus();
              setOpen(false);
            }}
            onSave={(newItemData) => {
              setFocus();
              onAddItem(idStore, newItemData);
              setOpen(false);
            }}
          />
        </>
      ) : null}
      <div className={classnames("text-center", { "d-none": open })}>
        <button
          type="button"
          className="btn btn-outline-primary new-item-btn"
          ref={btnRef}
          onClick={() => {
            setOpen(true);
          }}
        >
          <i className="fa fa-rebel me-2"></i>
          Nuevo Item
        </button>
      </div>
    </div>
  );
};

export default CreateItem;
