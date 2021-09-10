import { useState, useEffect } from "react";
import { Button, Row, Col, Collapse } from "reactstrap";
import CreateTienda from "./createTienda";
import Tienda from "./tienda";

const Tiendas = ({ data }) => {
  // Tiendas
  const [allOpen, setAllOpen] = useState(true);
  const toggleAllOpen = () => setAllOpen(!allOpen);
  const [tiendasList, setTiendasList] = useState([]);
  /*
    Modelo:
    {
      name: "Invictvs",
      games: [
        {
                name: "La Tripulación",
                editorial: "Devir",
                price: "baratos",
                count: 6,
              },
      ]
    }
    */
  useEffect(() => {
    if (data && data.games && data.games.length) {
      const o = {};
      data.games.forEach((game) => {
        const { name, editorial, price, tiendas } = game;

        tiendas.forEach((tienda) => {
          const nameTienda = tienda.name;
          const count = tienda.count;
          if (!o[nameTienda]) {
            o[nameTienda] = { name: nameTienda, games: [] };
          }
          o[nameTienda].games.push({
            name,
            editorial,
            price,
            count,
          });
        });
      });
      const newList = [];
      for (var a in o) {
        newList.push(o[a]);
      }
      setTiendasList(newList);
    }
  }, [data]);

  return (
    <div className="wrap">
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
      {tiendasList.map((tiendaData, k) => {
        return <Tienda tienda={tiendaData} key={k} allOpen={allOpen} />;
      })}
      <CreateTienda />
    </div>
  );
};

export default Tiendas;
