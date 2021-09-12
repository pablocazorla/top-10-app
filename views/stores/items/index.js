import Item from "./item";
import CreateItem from "./createItem";

const itemList = ({
  storeData,
  idStore,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) => {
  return (
    <div className="item-list">
      {storeData.items.length ? (
        storeData.items.map((itemData, k) => {
          return (
            <Item
              itemData={itemData}
              key={k}
              idStore={idStore}
              idItem={k}
              onEditItem={onEditItem}
              onDeleteItem={onDeleteItem}
            />
          );
        })
      ) : (
        <div className="no-items">Agrega un nuevo item.</div>
      )}
      <CreateItem idStore={idStore} onAddItem={onAddItem} />
    </div>
  );
};

export default itemList;
