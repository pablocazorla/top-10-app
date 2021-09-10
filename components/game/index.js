import classnames from "classnames";
import { Button, Row, Col } from "reactstrap";

const Game = ({ game, puesto, onDelete, className }) => {
  /*
  {
    name: "La Tripulación",
    editorial: "Devir",
    price: "baratos",
    count: 6,
  },
  
  
  */
  return (
    <div
      className={classnames(
        "game",
        `price-${game.price === "caros" ? "caros" : "baratos"}`,
        className
      )}
    >
      <Row className="align-items-center">
        {puesto ? (
          <Col xs="auto">
            <span className="puesto">2</span>
          </Col>
        ) : null}
        <Col>
          <div>
            <span className="name">{game.name}</span>
            {game.editorial ? (
              <span className="editorial">{game.editorial}</span>
            ) : null}
          </div>
          {game.tiendas ? (
            <div className="tiendas">
              {game.tiendas.map((t, k) => {
                return (
                  <span key={k}>
                    {k > 0 ? ", " : ""}
                    {t.name}
                  </span>
                );
              })}
            </div>
          ) : null}
        </Col>
        {game.count ? (
          <Col xs="auto">
            <span className="count">
              <span className="count-num">{game.count + " "}</span>
              <span className="count-text">{`unidad${
                game.count > 1 ? "es" : ""
              }`}</span>
            </span>
          </Col>
        ) : null}
        {onDelete ? (
          <Col xs="auto">
            <Button
              color="default"
              size="sm"
              className="px-2 text-danger"
              title="Quitar juego"
            >
              <i className="fa fa-times" />
            </Button>
          </Col>
        ) : null}
      </Row>
    </div>
  );
};
export default Game;
