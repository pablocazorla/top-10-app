import classnames from "classnames";
import { Row, Col } from "reactstrap";

const colSizes = {
  lg: {
    name: 6,
    editorial: 2,
    count: "auto",
    actions: true,
  },

  xs: {
    name: 4,
    editorial: 3,
    count: 2,
    actions: 3,
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
  return (
    <div className="item-box">
      <div className="item-box_body">
        <Row className="g-0">
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
