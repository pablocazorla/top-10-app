import { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import indice from "data/indice";
import List from "./list";
import { downloadFile } from "utils";

const Tops = ({ data }) => {
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
    newItems1.sort((a, b) => {
      return a.count < b.count ? 1 : -1;
    });
    const newListCut1 = newItems1.slice(0, 10);
    newListCut1.forEach((item, k) => {
      item.rank = k + 1;
    });
    setItems1(newListCut1);

    const newItems2 = [];
    for (var a2 in itemsPool.items2) {
      newItems2.push(itemsPool.items2[a2]);
    }
    newItems2.sort((a, b) => {
      return a.count < b.count ? 1 : -1;
    });
    const newListCut2 = newItems2.slice(0, 10);
    newListCut2.forEach((item, k) => {
      item.rank = k + 1;
    });
    setItems2(newListCut2);
  }, [data]);

  return (
    <div className="tops-container">
      <Row className="align-items-stretch">
        <Col xl={6} className="pe-md-5 border-left">
          <List itemList={items1} type={1} />
          {items2.length > 0 ? (
            <div className="tops-download">
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  downloadFile(items1, "top10_baratos.json");
                }}
              >
                <i className="fa fa-download me-2" />
                Descargar
              </Button>
            </div>
          ) : null}
        </Col>
        <Col xl={6} className="ps-md-5">
          <List itemList={items2} type={2} />
          {items2.length > 0 ? (
            <div className="tops-download">
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  downloadFile(items2, "top10_caros.json");
                }}
              >
                <i className="fa fa-download me-2" />
                Descargar
              </Button>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default Tops;
