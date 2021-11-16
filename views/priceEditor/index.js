import { useState, useEffect } from "react";
import { Row, Col, Input } from "reactstrap";
import ItemViewPrice from "components/itemViewPrice";

const PriceEditor = ({
  data,
  onSetIndice,
  onEditPriceType,
  onEditPriceNum,
}) => {
  const [gelatoValue, setGelatoValue] = useState(900);
  const [carcassonneValue, setCarcassonneValue] = useState(5000);

  const [listOrdered, setListOrdered] = useState([]);
  const [orderBy, setOrderBy] = useState("AZ");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = null;
    if (data && data.items) {
      const newList = [];
      for (let itemId in data.items) {
        if (itemId !== "empty_item") {
          let count = 0;
          for (let storeId in data.items[itemId].stores) {
            count += data.items[itemId].stores[storeId];
          }
          newList.push({ ...data.items[itemId], count });
        }
      }
      switch (orderBy) {
        case "price":
          newList.sort((a, b) => {
            return a.price < b.price ? -1 : 1;
          });
          break;
        case "count":
          newList.sort((a, b) => {
            return a.count > b.count ? -1 : 1;
          });
          break;
        default:
          // AZ
          newList.sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          });
      }
      setListOrdered(newList);
      setLoading(true);
      timer = setTimeout(() => {
        setLoading(false);
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [data, orderBy]);

  useEffect(() => {
    if (data && data.config.indices) {
      setGelatoValue(data.config.indices.gelato);
      setCarcassonneValue(data.config.indices.carcassonne);
    }
  }, [data]);

  return (
    <div className="wrap">
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Row>
            <Col xs="auto">
              <div className="indices-inp">
                <div className="indices-inp_lab">Indice "Gelato":</div>
                <input
                  type="number"
                  value={gelatoValue}
                  className="indices-inp_inp"
                  min="100"
                  max="99999"
                  onChange={(e) => {
                    setGelatoValue(parseInt(e.target.value, 10));
                  }}
                  onBlur={(e) => {
                    onSetIndice("gelato", parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </Col>
            <Col xs="auto">
              <div className="indices-inp">
                <div className="indices-inp_lab">Indice "Carcassonne":</div>
                <input
                  type="number"
                  value={carcassonneValue}
                  className="indices-inp_inp"
                  min="100"
                  max="99999"
                  onChange={(e) => {
                    setCarcassonneValue(parseInt(e.target.value, 10));
                  }}
                  onBlur={(e) => {
                    onSetIndice("carcassonne", parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <div className="indices-inp">
            <div className="indices-inp_lab">Ordenar por</div>
            <Input
              name="select"
              type="select"
              onChange={(e) => {
                setOrderBy(e.target.value);
              }}
            >
              <option value="AZ">A-Z</option>
              <option value="price">Precio</option>
              <option value="count">Cantidad</option>
            </Input>
          </div>
        </Col>
      </Row>
      {loading ? null : (
        <div className="list-prices pt-4">
          {listOrdered.map((itemData, k) => {
            return (
              <ItemViewPrice
                key={k}
                itemData={itemData}
                gelatoValue={gelatoValue}
                carcassonneValue={carcassonneValue}
                onEditPriceType={onEditPriceType}
                onEditPriceNum={onEditPriceNum}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PriceEditor;
