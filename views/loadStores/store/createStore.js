import { useState, useEffect, useRef } from "react";
import { Button, Input } from "reactstrap";
import storeOptions from "data/storeOptions";

const CreateStore = ({ data, onAddStore }) => {
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState("");
  const [storesToSelect, setStoresToSelect] = useState(storeOptions);

  useEffect(() => {
    if (open && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const restStores = storeOptions.filter((store) => {
      return data.items.empty_item.stores[store.id] !== 1;
    });
    setStoresToSelect(restStores);
  }, [data]);

  return (
    <div className="create-store">
      {open && (
        <div
          className="text-center select-store"
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <select
            type="select"
            className="form-control"
            ref={inputRef}
            value={selectedStoreId}
            onChange={(e) => {
              setSelectedStoreId(e.target.value);
            }}
          >
            <option value="">Selecciona tienda...</option>
            {storesToSelect.map((s, k) => {
              return (
                <option value={s.id} key={k}>
                  {s.name}
                </option>
              );
            })}
          </select>
          <i className="fa fa-caret-down" />
          <div className="text-center mt-2">
            <Button
              color="link"
              className="me-2"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              color="success"
              onClick={() => {
                setOpen(false);
                // Add store
                onAddStore(selectedStoreId);
              }}
              disabled={selectedStoreId === ""}
            >
              <i className="fa fa-plus me-2" />
              Agregar Tienda
            </Button>
          </div>
        </div>
      )}
      {!open && storesToSelect.length ? (
        <div className="text-center">
          <Button
            color="primary"
            onClick={() => {
              setSelectedStoreId("");
              setOpen(true);
            }}
          >
            <i className="fa fa-home me-2" />
            Nueva Tienda
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CreateStore;
