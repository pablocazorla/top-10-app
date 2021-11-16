import { useState, useCallback, useRef } from "react";
import classnames from "classnames";
import { Button, Row, Col } from "reactstrap";

const priceTypeClasses = {
  A: "p1",
  B: "p2",
  C: "p3",
};

const colSizes = {
  lg: {
    name: 6,
    editorial: 2,
    priceType: 2,
    priceNum: 1,
    count: true,
  },

  xs: {
    name: 7,
    editorial: 5,
    priceType: 4,
    priceNum: 2,
    count: 2,
  },
};

const ItemView = ({
  itemData = {
    name: "",
    editorial: "",
    price: "B",
    priceNum: 100,
    count: 1,
  },
  gelatoValue,
  carcassonneValue,
  onEditPriceType,
  onEditPriceNum,
  priceEditable,
  onEditItemAllStores,
}) => {
  const inputPriceRef = useRef(null);

  // const priceTypes = {
  //   p1: `Menos de ${indice.gelato}$`,
  //   p2: `Entre ${indice.gelato}$ y ${indice.carcassonne}$`,
  //   p3: `Más de ${indice.carcassonne}$`,
  // };

  const [priceType, setPriceType] = useState(itemData.price);
  const [priceNum, setPriceNum] = useState(itemData.priceNum || 100);

  return (
    <div className={classnames("item-box", priceTypeClasses[priceType])}>
      <div className="item-box_body">
        <Row className="g-0">
          <Col xs={colSizes.xs.name} lg={colSizes.lg.name}>
            <div className="col-header first">Nombre</div>
            <div className="col-content first">
              {itemData.name}{" "}
              {itemData.isNew ? (
                <i className="fa fa-circle text-primary small" title="Nuevo" />
              ) : null}
            </div>
          </Col>
          <Col
            className="mb-xs-2"
            xs={colSizes.xs.editorial}
            lg={colSizes.lg.editorial}
          >
            <div className="col-header">Editorial</div>
            <div className="col-content unwrap">{itemData.editorial}</div>
          </Col>
          <Col xs={colSizes.xs.priceType} lg={colSizes.lg.priceType}>
            <div className="col-header">Escala de precio ($ PVP)</div>
            <div className="col-content">
              <div className="select-wrap">
                <select
                  value={priceType}
                  onChange={(e) => {
                    const p = e.target.value;
                    setPriceType(p);
                    onEditPriceType(itemData.name, p, priceNum);

                    setTimeout(() => {
                      if (inputPriceRef && inputPriceRef.current) {
                        inputPriceRef.current.focus();
                      }
                    }, 200);
                  }}
                >
                  <option value="A">Menos de ${gelatoValue}</option>
                  <option value="B">
                    Entre ${gelatoValue} y ${carcassonneValue}
                  </option>
                  <option value="C">Más de ${carcassonneValue}</option>
                </select>
                <i className="fa fa-caret-down" />
              </div>
            </div>
          </Col>

          <Col xs={colSizes.xs.priceNum} lg={colSizes.lg.priceNum}>
            {priceType === "A" ? (
              <>
                <div className="col-header unwrap">Precio en $</div>
                <div className="col-content unwrap">
                  <div className="price-editor">
                    <div className="price-editor_edit">
                      <input
                        type="number"
                        value={priceNum}
                        ref={inputPriceRef}
                        min="0"
                        max={gelatoValue - 1}
                        className="text-center"
                        onChange={(e) => {
                          setPriceNum(parseInt(e.target.value, 10));
                        }}
                        onBlur={(e) => {
                          onEditPriceNum(
                            itemData.name,
                            parseInt(e.target.value, 10)
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="col-header unwrap">-</div>
            )}
          </Col>
          <Col xs={colSizes.xs.count} lg={colSizes.lg.count}>
            <div className="col-header last">Cantidad</div>
            <div className="col-content unwrap last">{itemData.count}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ItemView;
