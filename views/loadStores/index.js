import { useState, useEffect, useCallback } from "react";
import { Button, Row, Col, Modal, ModalBody } from "reactstrap";
import { downloadFile, camelize, dataToStores, itemsToList } from "utils";
import Store from "./store/store";
import CreateStore from "./store/createStore";
import LoadStoreJson from "./loadStoreJson";
//import LoadStore from "./store/loadStore";

const LoadStores = ({
  data,
  onAddStore,
  onDeleteStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onLoadFileStores,
  onDeleteAll,
}) => {
  const [allOpen, setAllOpen] = useState(true);
  const toggleAllOpen = () => setAllOpen(!allOpen);

  const [stores, setStores] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    setStores(dataToStores(data));
  }, [data]);

  return (
    <div className="wrap">
      <Row>
        {stores.length > 1 ? (
          <Col>
            <Button
              size="sm"
              className="px-0"
              color="default"
              onClick={toggleAllOpen}
              outline
            >
              <i
                className="fa fa-chevron-down me-2"
                style={{
                  transform: !allOpen ? "rotate(-90deg)" : "",
                }}
              />
              {allOpen ? "Minimizar" : "Maximizar"} todo
            </Button>
          </Col>
        ) : null}
        {stores.length > 0 ? (
          <Col className="text-end">
            <Button
              className="me-2"
              size="sm"
              color="danger"
              onClick={toggleModal}
            >
              <i className="fa fa-times me-2" />
              Borrar todo
            </Button>
            <Button
              size="sm"
              color="primary"
              onClick={() => {
                const nameJson = "tiendas_cargadas.json";
                downloadFile(data, nameJson);
              }}
            >
              <i className="fa fa-download me-2" />
              Descargar tienda{stores.length > 1 ? "s" : ""}
            </Button>
          </Col>
        ) : null}
      </Row>
      <hr />
      {stores.map((storeData, k) => {
        return (
          <Store
            data={data}
            storeData={storeData}
            onDeleteStore={onDeleteStore}
            onAddItem={onAddItem}
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
            allOpen={k === stores.length - 1 ? true : allOpen}
            key={k}
          />
        );
      })}
      <CreateStore data={data} onAddStore={onAddStore} />
      <LoadStoreJson onLoadFileStores={onLoadFileStores} />
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalBody className="text-center py-5">
          <h3 className="mb-4">¿Borrar todos los datos?</h3>
          <div>
            <Button color="link" onClick={toggleModal}>
              Cancelar
            </Button>{" "}
            <Button
              color="danger"
              onClick={() => {
                toggleModal();
                onDeleteAll();
              }}
            >
              Borrar
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoadStores;
