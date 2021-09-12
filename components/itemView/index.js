import classnames from "classnames";
import { Row, Col } from "reactstrap";
import indice from "data/indice";

const colSizes = {
  rank: true,
  name: 4,
  editorial: 2,
  priceType: true,
  price: 1,
  count: 1,
  actions: true,
};

const ItemView = ({
  itemData = {
    name: "",
    editorial: "",
    price: 0,
    count: 1,
  },
  rank,
  onEdit,
  onDelete,
}) => {
  const pt =
    itemData.price < indice.gelato
      ? "p1"
      : itemData.price < indice.carcassonne
      ? "p2"
      : "p3";

  const priceTypes = {
    p1: `Menos de ${indice.gelato}`,
    p2: `Entre ${indice.gelato} y ${indice.carcassonne}`,
    p3: `Más de ${indice.carcassonne}`,
  };

  return (
    <div className={classnames("item-box", pt)}>
      <div className="item-box_header">
        <Row className="g-2 align-items-center">
          {rank ? (
            <Col className="m-0" xs={colSizes.rank}>
              Puesto
            </Col>
          ) : null}
          <Col className="m-0" xs={colSizes.name}>
            Nombre
          </Col>
          <Col className="m-0" xs={colSizes.editorial}>
            Editorial
          </Col>
          <Col className="m-0" xs={colSizes.priceType}>
            Escala de precio ($ PVP)
          </Col>
          {itemData.price <= indice.gelato ? (
            <Col className="m-0" xs={colSizes.price}>
              Precio en $
            </Col>
          ) : null}
          <Col className="m-0" xs={colSizes.count}>
            Cantidad
          </Col>
          {onEdit || onDelete ? (
            <Col className="m-0 text-end" xs={colSizes.actions}>
              Acciones
            </Col>
          ) : null}
        </Row>
      </div>
      <div className="item-box_body">
        <Row className="g-2 align-items-center">
          {rank ? <Col xs={colSizes.rank}>{rank}</Col> : null}
          <Col xs={colSizes.name}>{itemData.name}</Col>
          <Col xs={colSizes.editorial}>{itemData.editorial}</Col>
          <Col xs={colSizes.priceType}>{priceTypes[pt]}</Col>
          {itemData.price <= indice.gelato ? (
            <Col xs={colSizes.price}>{itemData.price}</Col>
          ) : null}
          <Col xs={colSizes.count}>{itemData.count}</Col>
          {onEdit || onDelete ? (
            <Col className="text-end" xs={colSizes.actions}>
              {onEdit ? (
                <span
                  className="acc-btn text-primary"
                  title="Editar item"
                  onClick={() => {
                    onEdit();
                  }}
                >
                  <i className="fa fa-pencil" />
                </span>
              ) : null}
              {onDelete ? (
                <span
                  className="acc-btn text-danger"
                  title="Eliminar item"
                  onClick={() => {
                    onDelete();
                  }}
                >
                  <i className="fa fa-times" />
                </span>
              ) : null}
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
};
export default ItemView;
