import editorialOptions from "data/editorialOptions";
import { useCallback } from "react";

const LoadStore = ({ onLoadFileStores = () => {} }) => {
  const onChange = useCallback(() => {
    var reader = new FileReader();

    reader.readAsText(event.target.files[0]);

    reader.onload = (event) => {
      var obj = JSON.parse(event.target.result);
      onLoadFileStores(obj);
    };
  }, [onLoadFileStores]);

  return (
    <div className="text-center">
      <div className="load-store">
        <div className="load-store_text">
          ó{" "}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Cargar desde un archivo
          </a>
          .
        </div>
        <input id="file" type="file" onChange={onChange} />
      </div>
    </div>
  );
};
export default LoadStore;
