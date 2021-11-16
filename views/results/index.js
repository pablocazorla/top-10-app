import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import List from "./list";
import storeOptions from "data/storeOptions";

const Results = ({ data }) => {
  const [list_1, set_list_1] = useState([]);
  const [list_2, set_list_2] = useState([]);

  useEffect(() => {
    if (data && data.items) {
      const newList_1 = [];
      const newList_2 = [];

      for (let idItem in data.items) {
        if (idItem !== "empty_item") {
          const newItem = { ...data.items[idItem] };

          newItem.count = 0;
          newItem.storeList = [];
          for (let idStore in newItem.stores) {
            newItem.count += newItem.stores[idStore];
            const storeName = storeOptions.filter((s) => {
              return s.id === idStore;
            })[0].name;
            newItem.storeList.push(storeName);
          }

          if (newItem.price === "A") {
            newItem.realCount = newItem.count;
            newItem.count = Math.round(
              (newItem.count * (newItem.priceNum || 100)) /
                data.config.indices.gelato
            );
            newList_1.push(newItem);
          }
          if (newItem.price === "B") {
            newList_1.push(newItem);
          }
          if (newItem.price === "C") {
            newList_2.push(newItem);
          }
        }
      }
      newList_1.sort((a, b) => {
        return a.count > b.count ? -1 : 1;
      });
      newList_2.sort((a, b) => {
        return a.count > b.count ? -1 : 1;
      });
      set_list_1(newList_1);
      set_list_2(newList_2);
    }
  }, [data]);

  return (
    <div className="results-container">
      <Row className="align-items-stretch">
        <Col xl={6} className="pe-xl-5 border-left">
          <List itemList={list_1} type={1} indices={data.config.indices} />
        </Col>
        <Col xl={6} className="ps-xl-5">
          <List itemList={list_2} type={2} indices={data.config.indices} />
        </Col>
      </Row>
    </div>
  );
};

export default Results;
