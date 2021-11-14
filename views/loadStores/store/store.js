import { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Collapse,
  UncontrolledTooltip,
  Modal,
  ModalBody,
} from "reactstrap";
import { camelize } from "utils";
import ItemList from "../items/itemList";
import storeOptions from "data/storeOptions";
// import Game from "components/game";
// import CreateGame from "./createGame";

const Store = ({
  data,
  storeData,
  allOpen = true,
  onDeleteStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    setIsOpen(allOpen);
  }, [allOpen]);

  const [name, setName] = useState("");

  useEffect(() => {
    const n = storeOptions.filter((st) => {
      return st.id === storeData.id;
    })[0].name;
    setName(n);
  }, [storeData]);
  /*
  {
      id: "s5",
      items: [
        {
                name: "La Tripulación",
                editorial: "Devir",
                price: "baratos",
                count: 6,
              },
      ]
    }
  
  
  
  */
  return (
    <div className="store">
      <Row className="align-items-center cursor-pointer">
        <Col xs={"auto"} className="pe-0" onClick={toggle}>
          <Button
            className="p-0"
            color="link"
            style={{
              transform: !isOpen ? "rotate(-90deg)" : "",
            }}
          >
            <i className="fa fa-chevron-down" />
          </Button>
        </Col>
        <Col className="cursor-pointer" onClick={toggle}>
          <h4 className="m-0 p-0">{name}</h4>
        </Col>
        <Col xs={"auto"}>
          <Button
            className="py-0 px-2 text-danger"
            color="link"
            id={storeData.id + "-delete"}
            onClick={toggleModal}
          >
            <i className="fa fa-times" />
          </Button>
          <UncontrolledTooltip
            placement="top"
            target={storeData.id + "-delete"}
          >
            Eliminar tienda
          </UncontrolledTooltip>
        </Col>
      </Row>
      <Collapse isOpen={isOpen}>
        <ItemList
          data={data}
          items={storeData.items}
          idStore={storeData.id}
          onAddItem={onAddItem}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
        />
      </Collapse>
      <hr />
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalBody className="text-center py-5">
          <h3 className="mb-4">¿Eliminar "{name}"?</h3>
          <div>
            <Button color="link" onClick={toggleModal}>
              Cancelar
            </Button>{" "}
            <Button
              color="danger"
              onClick={() => {
                toggleModal();
                onDeleteStore(storeData.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Store;
