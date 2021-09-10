import { useEffect, useState } from "react";
import classnames from "classnames";
import {
  Button,
  Input,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

const indice_gelato = 850;
const indice_carcassone = 5500;

const ValueEditor = ({ price, setPrice }) => {
  const [val, setVal] = useState(3);
  const [priceType, setPriceType] = useState("barato");
  const [valSubPrice, setValSubPrice] = useState("50");

  useEffect(() => {
    if (typeof price === "number") {
      setValSubPrice(price);
      setPriceType("subprice");
    } else {
      setPriceType(price);
    }
  }, [price]);

  // 0-1,2-5,6-9

  return (
    <div className="value-editor">
      <div className="value-editor-values mb-2">
        <div className="value-editor-value v-1">
          <div
            className={classnames("value-editor-value-cont", {
              visible: priceType === "subprice",
            })}
          >
            <Row className="m-0 align-items-center">
              <Col xs={"auto"} className="ps-0 pe-1">
                $
              </Col>
              <Col className="p-0">
                <Input
                  size="sm"
                  type="number"
                  min="50"
                  max={`${indice_gelato}`}
                  value={valSubPrice}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    setValSubPrice(v);
                    setPrice(v);
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="value-editor-value v-2">
          <div
            className={classnames("value-editor-value-cont", {
              visible: priceType === "barato",
            })}
          >
            Barato
          </div>
        </div>
        <div className="value-editor-value v-3">
          <div
            className={classnames("value-editor-value-cont", {
              visible: priceType === "caro",
            })}
          >
            Caro
          </div>
        </div>
      </div>
      <div className="value-editor-range">
        <div className="value-editor-range-line">
          <div className="value-editor-range-line_s s1" />
          <div className="value-editor-range-line_s s2" />
          <div className="value-editor-range-line_s s3" />
          <div className="value-editor-range-point-reel">
            <div
              className="value-editor-range-point"
              style={{
                left: `${(100 * val) / 9}%`,
              }}
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="9"
          value={val}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            setVal(v);
            const pt = v <= 1 ? "subprice" : v <= 5 ? "barato" : "caro";
            setPriceType(pt);
            if (pt === "subprice") {
              setPrice(valSubPrice);
            } else {
              setPrice(pt);
            }
          }}
        />
      </div>
      <div className="value-editor-labels">
        <div className="value-editor-label l-1">
          <i className="fa fa-arrow-up" />
          <div className="value-editor-label_text">
            Índice <em>"Gelato"</em>
            <br />
            {`$${indice_gelato}`}
          </div>
        </div>
        <div className="value-editor-label l-2">
          <i className="fa fa-arrow-up" />
          <div className="value-editor-label_text">
            Índice <em>"Carcassone"</em>
            <br />
            {`$${indice_carcassone}`}
          </div>
        </div>
      </div>
    </div>
  );
};

const CreateGame = ({}) => {
  const [open, setOpen] = useState(true);

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("barato");

  const toggle = () => {
    setOpen((v) => !v);
  };

  console.log("price", price);
  return (
    <div className="create-game">
      {open && (
        <Card>
          <CardHeader>
            <h5 className="m-0 p-2 text-bold">
              <i className="fa fa-rebel me-2" />
              Agregar Juego
            </h5>
          </CardHeader>
          <CardBody>
            <Row className="mb-3">
              <Col>
                <div className="label">Nombre del juego:</div>
                <Input size="lg" />
              </Col>
              <Col xs="auto">
                <div style={{ width: 100 }}>
                  <div className="label">Cantidad:</div>
                  <Input
                    size="lg"
                    type="number"
                    className="text-end text-bold"
                  />
                </div>
              </Col>
            </Row>
            <div>
              <div className="label">Valor ($):</div>
              <ValueEditor price={price} setPrice={setPrice} />
            </div>
          </CardBody>
          <CardFooter className="text-center">
            <Button color="link" onClick={toggle}>
              Cancelar
            </Button>
            <Button
              color="primary"

              // onClick={() => {
              //   setOpen(true);
              // }}
            >
              <i className="fa fa-plus me-2" /> Agregar Juego
            </Button>
          </CardFooter>
        </Card>
      )}
      {!open && (
        <div className="text-center">
          <Button color="primary" size="sm" outline onClick={toggle}>
            <i className="fa fa-rebel me-2" />
            Agregar Juego
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateGame;
