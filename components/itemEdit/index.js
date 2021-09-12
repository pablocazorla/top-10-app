import { useState, useCallback, useRef } from "react";
import classnames from "classnames";
import { Button, Row, Col } from "reactstrap";
import indice from "data/indice";
import itemOptions from "data/itemOptions";
import editorialOptions from "data/editorialOptions";
import TextSelector from "./textSelector";

const colSizes = {
  name: 4,
  editorial: 2,
  priceType: true,
  price: 1,
  count: 1,
  actions: true,
};

const ItemEdit = ({
  itemData = {
    name: "",
    editorial: "",
    price: 0,
    count: 1,
  },
  inFocusStart = false,
  onCancel,
  onSave,
}) => {
  const inputPriceRef = useRef(null);

  const [name, setName] = useState(itemData.name);
  const [editorial, setEditorial] = useState(itemData.editorial);
  const [price, setPrice] = useState(itemData.price);
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
  const [nameError, setNameError] = useState(false);
  const [editorialError, setEditorialError] = useState(false);
  const [priceTypeError, setPriceTypeError] = useState(false);
  const [priceError, setPriceError] = useState(false);
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
    if (priceType === "p0") {
      withErrors = true;
      setPriceTypeError(true);
    }
    if (priceType === "p1" && (price === 0 || price > indice.gelato)) {
      withErrors = true;
      setPriceError(true);
    }
    if (count <= 0) {
      withErrors = true;
      setCountError(true);
    }

    if (!withErrors) {
      onSave({
        name,
        editorial,
        price,
        count,
      });
    }
  }, [name, editorial, price, priceType, count, onSave]);

  return (
    <div className={classnames("item-box", priceType)}>
      <div className="item-box_header">
        <Row className="g-2 align-items-center">
          <Col className="m-0" xs={colSizes.name}>
            Nombre
          </Col>
          <Col className="m-0" xs={colSizes.editorial}>
            Editorial
          </Col>
          <Col className="m-0" xs={colSizes.priceType}>
            Escala de precio ($ PVP)
          </Col>
          {priceType === "p1" ? (
            <Col className="m-0" xs={colSizes.price}>
              Precio en $
            </Col>
          ) : null}
          <Col className="m-0" xs={colSizes.count}>
            Cantidad
          </Col>
          <Col className="m-0 text-end" xs={colSizes.actions}>
            Acciones
          </Col>
        </Row>
      </div>
      <div className="item-box_body py-2">
        <Row className="g-2">
          <Col xs={colSizes.name}>
            <TextSelector
              collection={itemOptions}
              value={name}
              focus={inFocusStart}
              onChange={(val) => {
                setNameError(false);
                setName(val.name);
                if (val.editorial) {
                  setEditorial(val.editorial);
                }
              }}
            />
            {nameError && <div className="item-error">Error</div>}
          </Col>
          <Col xs={colSizes.editorial}>
            <TextSelector
              collection={editorialOptions}
              value={editorial}
              limit={1}
              onChange={(val) => {
                setEditorialError(false);
                setEditorial(val.name);
              }}
            />
            {editorialError && <div className="item-error">Error</div>}
          </Col>
          <Col xs={colSizes.priceType}>
            <div className="select-wrap">
              <select
                value={priceType}
                onChange={(e) => {
                  const p = e.target.value;
                  const newPrice =
                    p === "p0"
                      ? 0
                      : p === "p1"
                      ? 0
                      : p === "p2"
                      ? indice.gelato + 10
                      : indice.carcassonne + 10;
                  setPriceTypeError(false);
                  setPriceType(p);
                  setPrice(newPrice);
                  setTimeout(() => {
                    if (inputPriceRef && inputPriceRef.current) {
                      inputPriceRef.current.focus();
                    }
                  }, 200);
                }}
              >
                <option value="p0">Seleccionar</option>
                <option value="p1">Menos de ${indice.gelato}</option>
                <option value="p2">
                  Entre ${indice.gelato} y ${indice.carcassonne}
                </option>
                <option value="p3">Más de ${indice.carcassonne}</option>
              </select>
              <i className="fa fa-caret-down" />
            </div>
            {priceTypeError && <div className="item-error">Error</div>}
          </Col>

          {priceType === "p1" ? (
            <Col xs={colSizes.price}>
              <input
                type="number"
                value={price}
                ref={inputPriceRef}
                min="0"
                max={indice.gelato - 1}
                className="text-center"
                onChange={(e) => {
                  setPrice(parseInt(e.target.value, 10));
                }}
              />
              {priceError && <div className="item-error">Error</div>}
            </Col>
          ) : null}

          <Col xs={colSizes.count}>
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
          </Col>
          <Col className="text-end" xs={colSizes.actions}>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemEdit;
