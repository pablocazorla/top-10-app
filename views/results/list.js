import ItemViewResults from "components/itemViewResults";
import { downloadFile, lowerify } from "utils";
import { Row, Col, Button } from "reactstrap";

const formatSrc = (name) => {
  return lowerify(name);
};

const formatToPresentation = (listRaw) => {
  const o = { collection: [] };
  listRaw.forEach((item, k) => {
    const { name, count } = item;
    const a = {
      name,
      count,
      src: formatSrc(name),
    };
    if (k < 10) {
      o.collection.push(a);
    }
  });

  return o;
};

const List = ({ itemList, type, indices }) => {
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
          return (
            <div key={k}>
              <ItemViewResults
                itemData={itemData}
                rank={k + 1}
                indices={indices}
              />
              {k === 9 ? (
                <div className="tops-download">
                  <Button
                    size="lg"
                    color="primary"
                    onClick={() => {
                      downloadFile(
                        formatToPresentation(itemList),
                        `top10_${type === 1 ? "baratos" : "caros"}.json`
                      );
                    }}
                  >
                    <i className="fa fa-download me-2" />
                    Descargar
                  </Button>
                </div>
              ) : null}
            </div>
          );
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
