import classnames from "classnames";
import { Row, Col } from "reactstrap";
import indice from "data/indice";
import PriceEditor from "./priceEditor";
/*
const aaa = [
  { name: "DANY", para: "B6300" },
  { name: "Everdell", para: "BARBOL" },
  { name: "Last Aurora", para: "BARBOL" },
  { name: "Museum", para: "BARBOL" },
  { name: "Fertility", para: "DAVICAZU" },
  { name: "Ganymede", para: "DAVICAZU" },
  { name: "God of War, The Card Game", para: "DAVICAZU" },
  { name: "Monza, Das Kartenspiel", para: "DAVICAZU" },
  { name: "Point Salad", para: "DAVICAZU" },
  { name: "Red Outpost", para: "DAVICAZU" },
  { name: "Rolling Ranch", para: "DAVICAZU" },
  { name: "Space Hulk, Death Angel - The Card Game", para: "DAVICAZU" },
  { name: "Spring Meadow", para: "DAVICAZU" },
  { name: "Sheriff of Nottingham", para: "FEANOR_93" },
  { name: "7 Wonders", para: "GUILLEYEUGE" },
  { name: "Contrast", para: "GUILLEYEUGE" },
  { name: "Dragons", para: "GUILLEYEUGE" },
  { name: "Five Seals of Magic", para: "GUILLEYEUGE" },
  { name: "Linkage, A DNA Card Game", para: "GUILLEYEUGE" },
  { name: "Not Alone", para: "GUILLEYEUGE" },
  { name: "Pengoloo", para: "GUILLEYEUGE" },
  { name: "Zombie Dice", para: "GUILLEYEUGE" },
  { name: "Exploding Kittens, NSFW Deck", para: "LUCACHO66" },
  { name: "Roll Player", para: "LUCACHO66" },
  { name: "Biblios", para: "MARIANOJS" },
  { name: "Eight-Minute Empire, Legends", para: "MATAGIGANTES" },
  { name: "Inis", para: "MATAGIGANTES" },
  { name: "Kanagawa", para: "MATAGIGANTES" },
  { name: "Roll Player", para: "MATAGIGANTES" },
  { name: "Koi-Koi", para: "MOSHO85" },
  { name: "Papua", para: "MOSHO85" },
  { name: "Red7", para: "MOSHO85" },
  { name: "Tiny Towns", para: "MOSHO85" },
  { name: "Tsukiji", para: "MOSHO85" },
  { name: "7 Wonders, Babel", para: "NICK_ARG" },
  { name: "Ave Cesar", para: "NICK_ARG" },
  { name: "Ballotage", para: "NICK_ARG" },
  { name: "HEXEH, La conquista", para: "NICK_ARG" },
  { name: "Puerto Rico", para: "NICK_ARG" },
  { name: "San Juan", para: "NICK_ARG" },
  { name: "The Forgotten City", para: "NICK_ARG" },
  { name: "Calico", para: "PORORO" },
  { name: "Here I Stand, 500th Anniversary Edition", para: "PORORO" },
  { name: "Kamisado", para: "PORORO" },
  { name: "Qwixx", para: "PORORO" },
  { name: "Yspahan", para: "PORORO" },
];

const users = {};

const totalItems = 46;
const cost = 3620;
const itemCost = 78.7;

aaa.forEach((game) => {
  const { name, para } = game;
  if (!users[para]) {
    users[para] = [];
  }
  users[para].push(name);
});

let text = "";
let tot = 0;
for (var a in users) {
  text += a + ":\n";

  users[a].forEach((g) => {
    text += "  - " + g + "\n";
  });

  const part = users[a].length * itemCost;

  tot += part;

  text += "  Total: " + users[a].length + " juegos -> $" + part + "\n\n";
}

*/
const colSizes = {
  lg: {
    rank: 1,
    name: 4,
    editorial: 2,
    priceType: true,
    price: 3,
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
  priceEditable,
  onEditItemAllStores,
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
            <div className="col-header unwrap">Escala de precio ($ PVP)</div>
            <div className="col-content unwrap">{priceTypes[pt]}</div>
          </Col>
          {priceEditable && itemData.price <= indice.gelato ? (
            <Col xs={colSizes.xs.price} lg={colSizes.lg.price}>
              <div className="col-header unwrap">Precio en $</div>
              <div className="col-content unwrap">
                <PriceEditor
                  itemData={itemData}
                  onEditItemAllStores={onEditItemAllStores}
                />
              </div>
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
