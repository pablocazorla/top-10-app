import classnames from "classnames";
import { Row, Col } from "reactstrap";
import indice from "data/indice";

const colSizes = {
  lg: {
    rank: 1,
    name: 4,
    editorial: 2,
    priceType: true,
    price: 2,
    count: 1,
    actions: true,
  },

  xs: {
    rank: 1,
    name: 7,
    editorial: 5,
    priceType: true,
    price: 2,
    count: 2,
    actions: true,
  },
};

const ItemView = ({
  itemData = {
    name: "",
    editorial: "",
    price: 0,
    count: 1,
    realCount: null,
    stores: null,
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
    p1: `Menos de ${indice.gelato}$`,
    p2: `Entre ${indice.gelato}$ y ${indice.carcassonne}$`,
    p3: `Más de ${indice.carcassonne}$`,
  };

  return (
    <div className={classnames("item-box", pt)}>
      <div className="item-box_body">
        <Row className="g-0">
          {rank ? (
            <Col xs={colSizes.xs.rank} lg={colSizes.lg.rank}>
              <div className="col-header first">Puesto</div>
              <div className="col-content first">
                <div className="rank">{rank}</div>
              </div>
            </Col>
          ) : null}
          <Col
            xs={rank ? colSizes.xs.name - colSizes.xs.rank : colSizes.xs.name}
            lg={colSizes.lg.name}
          >
            <div className="col-header first">Nombre</div>
            <div className="col-content first">
              {itemData.name}{" "}
              {itemData.isNew ? (
                <i className="fa fa-circle text-primary small" title="Nuevo" />
              ) : null}
              {itemData.stores ? (
                <div className="store-list-name">
                  {itemData.stores.map((stname) => {
                    return (
                      <span className="store-name" key={stname}>
                        {stname}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </Col>
          <Col
            className="mb-xs-2"
            xs={colSizes.xs.editorial}
            lg={colSizes.lg.editorial}
          >
            <div className="col-header">Editorial</div>
            <div className="col-content unwrap">{itemData.editorial}</div>
          </Col>
          <Col xs={colSizes.xs.priceType} lg={colSizes.lg.priceType}>
            <div className="col-header">Escala de precio ($ PVP)</div>
            <div className="col-content unwrap">{priceTypes[pt]}</div>
          </Col>
          {itemData.price <= indice.gelato ? (
            <Col xs={colSizes.xs.price} lg={colSizes.lg.price}>
              <div className="col-header unwrap">Precio en $</div>
              <div className="col-content unwrap">{itemData.price}$</div>
            </Col>
          ) : null}
          <Col xs={colSizes.xs.count} lg={colSizes.lg.count}>
            <div
              className={classnames("col-header", {
                last: !onEdit && !onDelete,
              })}
            >
              Cantidad
            </div>
            <div
              className={classnames("col-content unwrap", {
                last: !onEdit && !onDelete,
              })}
            >
              {itemData.realCount ? (
                <>
                  {itemData.count}
                  <span className="op-4"> : {itemData.realCount}</span>
                </>
              ) : (
                itemData.count
              )}
            </div>
          </Col>
          {onEdit || onDelete ? (
            <Col
              className="text-end"
              xs={colSizes.xs.actions}
              lg={colSizes.lg.actions}
            >
              <div className="col-header last">Acciones</div>
              <div className="col-content last">
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
              </div>
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
};
export default ItemView;
