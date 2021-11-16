import { useState, useEffect, useCallback } from "react";
import { defaultData } from "config";
import Layout from "layout";
import { storage } from "utils";
import { Input, Button } from "reactstrap";
import Tabs from "components/tabs";
import LoadStores from "views/loadStores";
import PriceEditor from "views/priceEditor";
import Results from "views/results";
import Tops from "views/tops";
import password from "data/password";
import itemOptions from "data/itemOptions";
//import extractor from "data/extractor";

export default function Home() {
  // LOAD DATA ***************************
  const [data, setData] = useState({
    ...defaultData,
  });
  const [loadedData, setLoadedData] = useState(false);

  const dataStored = storage.get();

  useEffect(() => {
    if (dataStored && !loadedData) {
      if (dataStored !== "none") {
        setData(dataStored);
      } else {
        storage.set({
          ...defaultData,
        });
      }
      setLoadedData(true);
    }
  }, [dataStored, loadedData]);

  // END LOAD DATA ***************************

  // STORES ***************************
  const onAddStore = useCallback(
    (id) => {
      const newData = { ...data };
      newData.items.empty_item.stores[id] = 1;
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onDeleteStore = useCallback(
    (idStore) => {
      const newData = { ...data };
      for (let idItem in newData.items) {
        if (newData.items[idItem].stores[idStore]) {
          delete newData.items[idItem].stores[idStore];
          if (
            Object.entries(newData.items[idItem].stores).length === 0 &&
            idItem !== "empty_item"
          ) {
            delete newData.items[idItem];
          }
        }
      }
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  // END STORES ***************************

  // ITEMS ***************************
  const onAddItem = useCallback(
    (idStore, itemData) => {
      const newItemData = { ...itemData };
      const { name, count } = newItemData;
      delete newItemData.count;

      const newData = { ...data };

      if (!newData.items[name]) {
        newData.items[name] = { ...newItemData, stores: {} };
      }

      newData.items[name].stores[idStore] = count;

      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  const onEditItem = useCallback(
    (idStore, idItem, itemData) => {
      const newData = { ...data };

      newData.items[idItem].stores[idStore] = itemData.count;

      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onDeleteItem = useCallback(
    (idStore, idItem) => {
      const newData = { ...data };
      if (newData.items[idItem] && newData.items[idItem].stores[idStore]) {
        delete newData.items[idItem].stores[idStore];
        if (Object.entries(newData.items[idItem].stores).length === 0) {
          delete newData.items[idItem];
        }
        setData(newData);
        storage.set(newData);
      }
    },
    [data]
  );
  // END ITEMS ***************************

  // INDICES ***************************
  const onSetIndice = useCallback(
    (type, value) => {
      const newData = { ...data };
      newData.config.indices[type] = value;
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  // END INDICES ***************************

  // PRICES ***************************
  const onEditPriceType = useCallback(
    (idItem, price, priceNum) => {
      const newData = { ...data };
      newData.items[idItem].price = price;
      if (price === "A") {
        newData.items[idItem].priceNum = priceNum;
      } else {
        delete newData.items[idItem].priceNum;
      }
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  const onEditPriceNum = useCallback(
    (idItem, priceNum) => {
      const newData = { ...data };
      newData.items[idItem].priceNum = priceNum;
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  // END PRICES ***************************

  // Load file ***************************

  const onLoadFileStores = useCallback(
    (obj) => {
      const newData = { ...data, config: obj.config };
      for (let idItem in obj.items) {
        if (idItem === "empty_item") {
          newData.items.empty_item.stores = {
            ...newData.items.empty_item.stores,
            ...obj.items.empty_item.stores,
          };
        } else {
          if (newData.items[idItem]) {
            newData.items[idItem].editorial = obj.items[idItem].editorial;
            newData.items[idItem].price = obj.items[idItem].price;
            if (obj.items[idItem].priceNum) {
              newData.items[idItem].priceNum = obj.items[idItem].priceNum;
            }
            for (let idStore in obj.items[idItem].stores) {
              newData.items[idItem].stores[idStore] =
                obj.items[idItem].stores[idStore];
            }
          } else {
            newData.items[idItem] = obj.items[idItem];
          }
        }
      }
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  // END file ***************************

  // TAB VIEW ***************************
  const onChangeTabView = useCallback(
    (tabId) => {
      const newData = { ...data };
      newData.config.initialTab = tabId;
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  // END TAB VIEW ***************************

  return (
    <Layout>
      <Tabs
        initialTab={data.config.initialTab}
        onChangeTab={onChangeTabView}
        tabs={[
          {
            title: "1. Cargar tiendas",
            content: (
              <LoadStores
                data={data}
                onAddStore={onAddStore}
                onDeleteStore={onDeleteStore}
                onAddItem={onAddItem}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
                onLoadFileStores={onLoadFileStores}
              />
            ),
          },
          {
            title: "2. Editar precios",
            content: (
              <PriceEditor
                data={data}
                onEditPriceType={onEditPriceType}
                onEditPriceNum={onEditPriceNum}
                onSetIndice={onSetIndice}
              />
            ),
          },
          {
            title: "3. Descargar Tops",
            content: <Results data={data} />,
          },
        ]}
      />
    </Layout>
  );
}
