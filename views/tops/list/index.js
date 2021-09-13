import ItemView from "components/itemView";

const List = ({ itemList, type }) => {
  return (
    <div className="tops-list">
      <div className="tops-list_header">
        <h2 className="p-0 m-0 tops-title">
          Top 10 <span>"{type === 1 ? "baratos" : "caros"}"</span>
        </h2>
        <hr />
      </div>
      <div className="tops-list_body">
        {itemList.map((itemData, k) => {
          return <ItemView itemData={itemData} key={k} rank={itemData.rank} />;
        })}
        {itemList.length === 0 ? (
          <div className="text-center text-italic">
            Sin items cargados todavía.
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default List;
