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
  itemData = {
    count: 1,
  },
  onCancel,
  onSave,
}) => {
  const [count, setCount] = useState(itemData.count);

  const pt =
    itemData.price === 0
      ? "p0"
      : itemData.price < indice.gelato
      ? "p1"
      : itemData.price < indice.carcassonne
      ? "p2"
      : "p3";
  const [priceType, setPriceType] = useState(pt);

  ////////////////////
  const [countError, setCountError] = useState(false);

  const onSaveData = useCallback(() => {
    let withErrors = false;

    if (count <= 0) {
      withErrors = true;
      setCountError(true);
    }

    if (!withErrors) {
      const o = {
        count,
      };
      onSave(o);
    }
  }, [count, onSave]);

  return (
    <div className="item-box">
      <div className="item-box_body for-editor">
        <Row className="g-0">
          <Col lg={colSizes.name}>
            <div className="col-header first">Nombre</div>
            <div className="col-content first">{itemData.name}</div>
          </Col>
          <Col lg={colSizes.editorial}>
            <div className="col-header">Editorial</div>
            <div className="col-content unwrap">{itemData.editorial}</div>
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
          <Col className="text-end" lg={colSizes.actions}>
            <div className="col-header last">Acciones</div>
            <div className="col-content last">
              <div className="btn-container">
                <Button
                  color="default"
                  size="sm"
                  className="px-2 py-1 me-1"
                  onClick={onCancel}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  size="sm"
                  className="px-2 py-1"
                  onClick={onSaveData}
                >
                  Guardar
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
