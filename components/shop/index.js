import { useState, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  Collapse,
} from "reactstrap";

const Shop = ({ shop, shopsToSelect = [] }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const toggleCollapseOpen = useCallback(() => {
    setCollapseOpen((v) => {
      return !v;
    });
  }, [setCollapseOpen]);

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const toggleModalDelete = useCallback(() => {
    setModalDeleteOpen((v) => {
      return !v;
    });
  }, [setModalDeleteOpen]);

  const [shopName, setShopName] = useState(shop.shop.name || "");

  console.log(shop);

  const selectShop = useCallback(
    (e) => {
      const val = e.target.value;
      if (val !== "none") {
        setShopName(val);
        setCollapseOpen(true);
      } else {
        setShopName("");
        setCollapseOpen(false);
      }
    },
    [setCollapseOpen]
  );

  return (
    <>
      <div className="shop">
        <Card>
          <CardHeader>
            <Row className="align-items-center justify-content-between">
              <Col xs={"auto"}>
                <Button
                  color="link"
                  size="sm"
                  onClick={toggleCollapseOpen}
                  style={{
                    transform: collapseOpen ? "none" : "rotate(-90deg)",
                  }}
                >
                  <i className="fa fa-chevron-down" />
                </Button>
              </Col>
              <Col>
                <Input
                  type="select"
                  name="select"
                  onChange={selectShop}
                  value={shopName}
                >
                  <option value={"none"}>Selecciona tienda...</option>
                  {shopsToSelect.map((s, k) => {
                    return (
                      <option value={s.name} key={k}>
                        {s.name}
                      </option>
                    );
                  })}
                </Input>
              </Col>
              <Col xs={"auto"}>
                <Button color="link" size="sm" onClick={toggleModalDelete}>
                  <i className="fa fa-times text-danger" />
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <Collapse isOpen={collapseOpen}>
            <CardBody>Booddy</CardBody>
          </Collapse>
        </Card>
      </div>
      <Modal isOpen={modalDeleteOpen} toggle={toggleModalDelete} centered>
        <ModalBody>
          <h2 className="text-center pt-4">¿Borrar tienda?</h2>
        </ModalBody>
        <div className="text-center p-4">
          <Button color="link" onClick={toggleModalDelete}>
            Cancelar
          </Button>{" "}
          <Button color="danger" onClick={toggleModalDelete}>
            Sí, borrar
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Shop;
