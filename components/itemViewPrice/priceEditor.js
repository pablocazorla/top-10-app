import { useState, useCallback, useRef } from "react";
import indice from "data/indice";
import { Button, Row, Col } from "reactstrap";

const PriceEditor = ({
  itemData = { price: 0, name: "" },
  onEditItemAllStores,
}) => {
  const inputPriceRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [price, setPrice] = useState(itemData.price);
  const [priceError, setPriceError] = useState(false);

  const onSaveData = useCallback(() => {
    if (price <= 0 || price > indice.gelato || price === "") {
      setPriceError(true);
    } else {
      onEditItemAllStores(itemData.name, {
        ...itemData,
        price,
      });
      setPriceError(false);
      setEdit(false);
    }
  }, [itemData, price]);

  return (
    <div className="price-editor">
      {edit ? (
        <div className="price-editor_edit">
          <Row className="g-1">
            <Col xs={6}>
              {" "}
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
            <Col xs={6}>
              <div className="btn-container">
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
      ) : (
        <div className="price-editor_view">
          {price}$
          <span
            className="acc-btn text-primary"
            title="Editar item"
            onClick={() => {
              setEdit(true);
            }}
          >
            <i className="fa fa-pencil" />
          </span>
        </div>
      )}
    </div>
  );
};
export default PriceEditor;
