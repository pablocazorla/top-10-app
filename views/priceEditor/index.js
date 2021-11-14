import { useState, useEffect } from "react";
import { Button, Row, Col, Collapse } from "reactstrap";

const PriceEditor = ({ data, onEditItemPrice, onSetIndice }) => {
  const [gelatoValue, setGelatoValue] = useState(900);
  const [carcassonneValue, setCarcassonneValue] = useState(5000);

  useEffect(() => {
    if (data && data.config.indices) {
      setGelatoValue(data.config.indices.gelato);
      setCarcassonneValue(data.config.indices.carcassonne);
    }
  }, [data]);

  return (
    <div className="wrap">
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
    </div>
  );
};

export default PriceEditor;
