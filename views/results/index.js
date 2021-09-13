import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import indice from "data/indice";
import List from "./list";

const Resultados = ({ data }) => {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const itemsPool = {
      items1: {},
      items2: {},
    };

    data.stores.forEach((store) => {
      store.items.forEach((item) => {
        const cat = item.price < indice.carcassonne ? 1 : 2;
        if (!itemsPool["items" + cat][item.name]) {
          itemsPool["items" + cat][item.name] = {
            ...item,
            stores: [store.name],
          };
        } else {
          itemsPool["items" + cat][item.name].count += item.count;
          itemsPool["items" + cat][item.name].stores.push(store.name);
        }
      });
    });

    const newItems1 = [];
    for (var a1 in itemsPool.items1) {
      newItems1.push(itemsPool.items1[a1]);
    }
    newItems1.forEach((item) => {
      if (item.price < indice.gelato) {
        const count = Math.round((item.count * item.price) / indice.gelato);
        item.realCount = item.count;
        item.count = count;
      }
    });
    setItems1(newItems1);

    const newItems2 = [];
    for (var a2 in itemsPool.items2) {
      newItems2.push(itemsPool.items2[a2]);
    }
    setItems2(newItems2);
  }, [data]);

  return (
    <div className="results-container">
      <Row className="align-items-stretch">
        <Col md={6} className="pe-md-5 border-left">
          <List itemList={items1} type={1} />
        </Col>
        <Col md={6} className="ps-md-5">
          <List itemList={items2} type={2} />
        </Col>
      </Row>
    </div>
  );
};

export default Resultados;
