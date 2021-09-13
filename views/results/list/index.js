import { useState, useEffect } from "react";
import { Row, Col, Input } from "reactstrap";
import ItemView from "components/itemView";

const List = ({ itemList, type }) => {
  const [list, setList] = useState([]);
  const [orderBy, setOrderBy] = useState("none");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const newListRaw = [...itemList];

    let newList = [];

    if (searchText.length > 1) {
      newList = newListRaw.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 ||
          item.editorial.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
        );
      });
    } else {
      newList = newListRaw;
    }

    if (orderBy !== "none") {
      newList.sort((a, b) => {
        const dir = orderBy === "count" ? -1 : 1;
        return a[orderBy] < b[orderBy] ? -1 * dir : dir;
      });
    }

    setList(newList);
  }, [itemList, orderBy, searchText]);

  return (
    <div className="result-list">
      <div className="result-list_header">
        <Row className="g-2 align-items-center">
          <Col>
            <h4 className="p-0 m-0">
              {type === 1 ? "Baratos" : "Caros"}
              {` (${list.length})`}
            </h4>
          </Col>
          <Col xs={3}>
            <div className="label-min">Buscar:</div>
            <div className="select-wrap">
              <Input
                size="sm"
                placeholder="Escribe unas palabras..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <div className="icon">
                <i className="fa fa-search" />
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="label-min">Ordenar por:</div>
            <div className="select-wrap">
              <Input
                type="select"
                size="sm"
                value={orderBy}
                onChange={(e) => {
                  setOrderBy(e.target.value);
                }}
              >
                <option value="none">Selecciona...</option>
                <option value="name">Nombre</option>
                {type === 1 ? <option value="price">Precio</option> : null}
                <option value="count">Cantidad</option>
              </Input>
              <div className="icon">
                <i className="fa fa-caret-down" />
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </div>
      <div className="result-list_body">
        {list.map((itemData, k) => {
          return <ItemView itemData={itemData} key={k} />;
        })}
        {list.length === 0 ? (
          <div className="text-center text-italic">
            Sin items cargados todavía.
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default List;
