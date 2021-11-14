import Item from "./item";
import CreateItem from "./createItem";

const itemList = ({
  data,
  items,
  idStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) => {
  return (
    <div className="item-list">
      {items.length ? (
        items.map((itemData, k) => {
          return (
            <Item
              itemData={itemData}
              key={k}
              idStore={idStore}
              idItem={itemData.name}
              onEditItem={onEditItem}
              onDeleteItem={onDeleteItem}
            />
          );
        })
      ) : (
        <div className="no-items">Agrega un nuevo item.</div>
      )}
      <CreateItem idStore={idStore} onAddItem={onAddItem} data={data} />
    </div>
  );
};

export default itemList;
