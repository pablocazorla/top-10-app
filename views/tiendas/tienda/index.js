import { useState, useEffect } from "react";
import { Button, Row, Col, Collapse } from "reactstrap";
import Game from "components/game";
import CreateGame from "./createGame";

const Tienda = ({ tienda, allOpen }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(allOpen);
  }, [allOpen]);
  /*
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
  return (
    <div className="tienda">
      <Row className="aling-items-center cursor-pointer" onClick={toggle}>
        <Col xs={"auto"} className="pe-0">
          <Button
            className="px-0"
            color="link"
            style={{
              transform: !isOpen ? "rotate(-90deg)" : "",
            }}
          >
            <i className="fa fa-chevron-down" />
          </Button>
        </Col>
        <Col>
          <h4 className="m-0 p-0">{tienda.name}</h4>
        </Col>
      </Row>
      <Collapse isOpen={isOpen}>
        <div className="tienda-list">
          {tienda.games.map((game, k) => {
            return <Game game={game} key={k} />;
          })}
          <CreateGame />
        </div>
      </Collapse>
      <hr />
    </div>
  );
};

export default Tienda;
