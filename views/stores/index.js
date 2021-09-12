import { useState, useEffect, useCallback } from "react";
import { Button, Row, Col, Collapse } from "reactstrap";
import CreateStore from "./store/createStore";
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
  onAddStore,
  onDeleteStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) => {
  const [allOpen, setAllOpen] = useState(true);
  const toggleAllOpen = () => setAllOpen(!allOpen);

  return (
    <div className="wrap">
      {data.stores.length > 1 ? (
        <>
          <Row>
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
          </Row>
          <hr />
        </>
      ) : null}

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
      <CreateStore data={data} onAddStore={onAddStore} />
    </div>
  );
};

export default Stores;
