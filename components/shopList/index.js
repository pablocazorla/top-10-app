import { useState, useEffect } from "react";
import Shop from "components/shop";
import shops from "data/shops";
import { Button, Card, CardBody, Input, Row, Col } from "reactstrap";

const ShopList = ({ data }) => {
  const [addingShop, setAddingShop] = useState(false);
  const [shopsToSelect, setShopsToSelect] = useState(shops);
  const [shopName, setShopName] = useState("");

  return (
    <div className="shop-list">
      {data.shops.map((shop, k) => {
        return <Shop shop={shop} key={k} />;
      })}
      {addingShop ? (
        <div className="">
          <hr />
          <div className="mx-auto" style={{ maxWidth: 400 }}>
            <div className="text-bold">Tienda:</div>
            <Row className="align-items-center mb-3">
              <Col className="pe-2">
                <Input
                  type="select"
                  name="select"
                  onChange={(e) => {
                    setShopName(e.target.value);
                  }}
                  value={shopName}
                >
                  <option value="">Selecciona tienda...</option>
                  {shopsToSelect.map((s, k) => {
                    return (
                      <option value={s.name} key={k}>
                        {s.name}
                      </option>
                    );
                  })}
                </Input>
              </Col>
              <Col xs={"auto"} className="ps-0">
                {" "}
                <i className="fa fa-chevron-down" />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Button
                  color="secondary"
                  onClick={() => {
                    setShopName("");
                    setAddingShop(false);
                  }}
                  block
                  outline
                >
                  Cancelar
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  color="primary"
                  disabled={shopName === ""}
                  onClick={() => {
                    setShopName("");
                    setAddingShop(false);
                  }}
                  block
                >
                  <i className="fa fa-plus me-2" />
                  Agregar
                </Button>
              </Col>
            </Row>
          </div>
          <hr />
        </div>
      ) : (
        <div className="text-center">
          <Button
            color="primary"
            onClick={() => {
              setAddingShop(true);
            }}
            outline
          >
            <i className="fa fa-plus me-2" />
            Agregar Tienda
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShopList;
