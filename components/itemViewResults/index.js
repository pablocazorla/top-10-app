import classnames from "classnames";
import { Row, Col } from "reactstrap";
import indice from "data/indice";

const priceClasses = {
  A: "p1",
  B: "p2",
  C: "p3",
};

const colSizes = {
  lg: {
    rank: 1,
    name: 4,
    editorial: 2,
    price: true,
    priceNum: 2,
    count: 1,
  },

  xs: {
    rank: 1,
    name: 7,
    editorial: 5,
    price: true,
    priceNum: 2,
    count: 2,
  },
};

const ItemView = ({
  itemData = {
    name: "",
    editorial: "",
    price: "B",
    priceNum: 100,
    count: 1,
    realCount: 0,
    storeList: [],
  },
  rank,
  indices,
}) => {
  const priceTypes = {
    A: `Menos de ${indices.gelato}$`,
    B: `Entre ${indices.gelato}$ y ${indices.carcassonne}$`,
    C: `Más de ${indices.carcassonne}$`,
  };

  return (
    <div
      className={classnames("item-box", priceClasses[itemData.price])}
      style={{
        opacity: rank > 10 ? 0.35 : 1,
      }}
    >
      <div className="item-box_body">
        <Row className="g-0">
          <Col xs={colSizes.xs.rank} lg={colSizes.lg.rank}>
            <div className="col-header first">Puesto</div>
            <div className="col-content first">
              <div className="rank">{rank}</div>
            </div>
          </Col>
          <Col xs={colSizes.xs.name} lg={colSizes.lg.name}>
            <div className="col-header first">Nombre</div>
            <div className="col-content first">
              {itemData.name}{" "}
              {itemData.isNew ? (
                <i className="fa fa-circle text-primary small" title="Nuevo" />
              ) : null}
              {itemData.storeList.length ? (
                <div className="store-list-name">
                  {itemData.storeList.map((stname) => {
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
          <Col xs={colSizes.xs.price} lg={colSizes.lg.price}>
            <div className="col-header unwrap">Escala de precio ($ PVP)</div>
            <div className="col-content unwrap">
              {priceTypes[itemData.price]}
            </div>
          </Col>
          {itemData.price === "A" && itemData.priceNum ? (
            <Col xs={colSizes.xs.priceNum} lg={colSizes.lg.priceNum}>
              <div className="col-header unwrap">Precio en $</div>
              <div className="col-content unwrap">{itemData.priceNum}</div>
            </Col>
          ) : null}
          <Col xs={colSizes.xs.count} lg={colSizes.lg.count}>
            <div className="col-header last">Cantidad</div>
            <div className="col-content unwrap last">
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
        </Row>
      </div>
    </div>
  );
};
export default ItemView;
