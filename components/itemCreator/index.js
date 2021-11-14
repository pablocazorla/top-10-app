import { useState, useCallback, useRef } from "react";
import classnames from "classnames";
import { Button, Row, Col } from "reactstrap";
import indice from "data/indice";
import itemOptions from "data/itemOptions";
import editorialOptions from "data/editorialOptions";
import TextSelector from "./textSelector";

const colSizes = {
  name: 6,
  editorial: 2,
  count: "auto",
  actions: true,
};

const ItemEdit = ({
  data,
  itemData = {
    name: "",
    editorial: "",
    price: "B",
    count: 1,
  },
  inFocusStart = false,
  onCancel,
  onSave,
}) => {
  const [isNew, setIsNew] = useState(false);
  const [name, setName] = useState(itemData.name);
  const [editorial, setEditorial] = useState(itemData.editorial);
  const [price, setPrice] = useState(itemData.price);
  const [count, setCount] = useState(itemData.count);

  ////////////////////
  const [nameError, setNameError] = useState(false);
  const [editorialError, setEditorialError] = useState(false);
  const [countError, setCountError] = useState(false);

  const onSaveData = useCallback(() => {
    let withErrors = false;
    if (name === "") {
      withErrors = true;
      setNameError(true);
    }
    if (editorial === "") {
      withErrors = true;
      setEditorialError(true);
    }
    if (count <= 0) {
      withErrors = true;
      setCountError(true);
    }
    if (!withErrors) {
      const o = {
        name,
        editorial,
        price,
        count,
      };
      if (isNew) {
        o.isNew = true;
      }

      onSave(o);
    }
  }, [name, editorial, price, count, isNew, onSave]);

  return (
    <div className="item-box">
      <div className="item-box_body for-editor">
        <Row className="g-0">
          <Col lg={colSizes.name}>
            <div className="col-header first">Nombre</div>
            <div className="col-content first">
              <TextSelector
                data={data}
                collection={itemOptions}
                placeholder="Nombre del item"
                value={name}
                focus={inFocusStart}
                onChange={(val, countOptions) => {
                  setNameError(false);
                  setName(val.name);
                  if (val.editorial) {
                    setEditorial(val.editorial);
                  }
                  if (val.price) {
                    setPrice(val.price);
                  }
                  if (val.isNew) {
                    setIsNew(true);
                  } else {
                    setIsNew(countOptions === 0);
                  }
                }}
              />
              {nameError && <div className="item-error">Error</div>}
            </div>
          </Col>
          <Col lg={colSizes.editorial}>
            <div className="col-header">Editorial</div>
            <div className="col-content">
              <TextSelector
                collection={editorialOptions}
                placeholder="Editorial"
                value={editorial}
                limit={1}
                onChange={(val) => {
                  setEditorialError(false);
                  setEditorial(val.name);
                }}
              />
              {editorialError && <div className="item-error">Error</div>}
            </div>
          </Col>
          <Col lg={colSizes.count}>
            <div className="col-header">Cantidad</div>
            <div className="col-content">
              <input
                type="number"
                value={count}
                className="text-center"
                min="1"
                max="999"
                onChange={(e) => {
                  setCountError(false);
                  setCount(parseInt(e.target.value, 10));
                }}
              />
              {countError && <div className="item-error">Error</div>}
            </div>
          </Col>
          <Col lg={colSizes.actions}>
            <div className="col-header last">Acciones</div>
            <div className="col-content last">
              <div className="btn-container">
                <Button
                  color="success"
                  size="sm"
                  className="px-2 py-1 me-1"
                  onClick={onSaveData}
                >
                  Guardar
                </Button>
                <Button
                  color="default"
                  size="sm"
                  className="px-2 py-1"
                  onClick={onCancel}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemEdit;
