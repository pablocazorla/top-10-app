import { useState, useEffect, useCallback } from "react";
import { Button, Row, Col, Collapse } from "reactstrap";
import { downloadFile, camelize } from "utils";
import CreateStore from "./store/createStore";
import LoadStore from "./store/loadStore";
import Store from "./store";

/*
MODEL
{
  stores: [
    {
      name: "Invictvs",
      items: [
        {
          name: "La Tripulación",
          editorial: "Devir",
          price: 3300,
          count: 6,
        },
      ],
    },
  ],
}
*/

const Stores = ({
  data,
  isAdmin = true,
  onAddStore,
  onDeleteStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onLoadFileStores,
}) => {
  const [allOpen, setAllOpen] = useState(true);
  const toggleAllOpen = () => setAllOpen(!allOpen);

  return (
    <div className="wrap">
      <Row>
        {data.stores.length > 1 ? (
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
              {allOpen ? "Cerrar" : "Abrir"} todo
            </Button>
          </Col>
        ) : null}
        {data.stores.length > 0 ? (
          <Col className="text-end">
            <Button
              size="sm"
              color="primary"
              onClick={() => {
                const nameJson = isAdmin
                  ? "tiendas_cargadas.json"
                  : `tienda_${camelize(data.stores[0].name)}.json`;
                downloadFile(data, nameJson);
              }}
            >
              <i className="fa fa-download me-2" />
              Descargar tienda{isAdmin && data.stores.length > 1 ? "s" : ""}
            </Button>
          </Col>
        ) : null}
      </Row>
      <hr />

      {data.stores.map((storeData, k) => {
        return (
          <Store
            storeData={storeData}
            onDeleteStore={onDeleteStore}
            onAddItem={onAddItem}
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
            allOpen={allOpen}
            key={k}
            id={k}
          />
        );
      })}
      {!isAdmin && data.stores.length > 0 ? null : (
        <CreateStore data={data} onAddStore={onAddStore} />
      )}
      {isAdmin && <LoadStore onLoadFileStores={onLoadFileStores} />}
    </div>
  );
};

export default Stores;
