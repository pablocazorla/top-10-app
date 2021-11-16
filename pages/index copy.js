import { useState, useEffect, useCallback } from "react";
import Layout from "layout";
import { storage } from "utils";
import { Input, Button } from "reactstrap";
import Tabs from "components/tabs";
import Stores from "views/stores";
import Results from "views/results";
import Tops from "views/tops";
import password from "data/password";
//import extractor from "data/extractor";

export default function Home() {
  /*
  (() => {
    const o = {};
    extractor.stores.forEach((store) => {
      store.items.forEach((item) => {
        if (item.isNew) {
          if (!o[item.name]) {
            o[item.name] = {
              name: item.name,
              editorial: item.editorial,
            };
          }
        }
      });
    });
    const li = [];
    for (var a in o) {
      li.push(o[a]);
    }
  })();
  */

  const [newPassword, setNewPassword] = useState("");
  const [errornewPassword, seterrorNewPassword] = useState(false);

  const [data, setData] = useState({
    stores: [],
  });
  const [loadedStored, setLoadedStored] = useState(false);

  const [configData, setconfigData] = useState({ initialTab: 0, password: "" });
  const [loadedconfigDataStored, setLoadedconfigDataStored] = useState(false);

  const dataStored = storage.get();
  const configDataStored = storage.get("top10app_config");

  useEffect(() => {
    if (dataStored && !loadedStored) {
      if (dataStored !== "none") {
        setData(dataStored);
      } else {
        storage.set({
          stores: [],
        });
      }
      setLoadedStored(true);
    }
  }, [dataStored, loadedStored]);

  useEffect(() => {
    if (configDataStored && !loadedconfigDataStored) {
      if (configDataStored !== "none") {
        setconfigData(configDataStored);
      } else {
        storage.set({ initialTab: 0, password: "" }, "top10app_config");
      }
      setLoadedconfigDataStored(true);
    }
  }, [configDataStored, loadedconfigDataStored]);

  const onAddItem = useCallback(
    (storeId, itemData) => {
      const newData = { ...data };
      newData.stores[storeId].items.push(itemData);
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onEditItem = useCallback(
    (storeId, itemId, itemData) => {
      const newData = { ...data };
      newData.stores[storeId].items[itemId] = itemData;
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  const onEditItemAllStores = useCallback(
    (itemName, itemData) => {
      let newData = { ...data };
      newData.stores.forEach((store) => {
        store.items.forEach((item) => {
          if (item.name === itemName) {
            item.price = itemData.price;
          }
        });
      });
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onDeleteItem = useCallback(
    (storeId, itemId) => {
      const newData = { ...data };
      newData.stores[storeId].items.splice(itemId, 1);
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onLoadFileStores = useCallback(
    (dataLoaded) => {
      if (dataLoaded && dataLoaded.stores && dataLoaded.stores.length > 0) {
        let newData = { ...data };
        if (newData.stores.length > 0) {
          dataLoaded.stores.forEach((newStore) => {
            let existNewStore = false;
            newData.stores.forEach((oldStore) => {
              if (newStore.name === oldStore.name) {
                existNewStore = true;
                // Items
                newStore.items.forEach((newItem) => {
                  let existNewItem = false;
                  oldStore.items.forEach((oldItem) => {
                    if (newItem.name === oldItem.name) {
                      existNewItem = true;
                    }
                  });
                  if (!existNewItem) {
                    oldStore.items.push(newItem);
                  }
                });
              }
            });
            if (!existNewStore) {
              newData.stores.push(newStore);
            }
          });
        } else {
          newData = { ...dataLoaded };
        }
        setData(newData);
        storage.set(newData);
      }
    },
    [data]
  );

  return (
    <Layout>
      {loadedconfigDataStored && (
        <Tabs
          initialTab={configData.initialTab}
          onChangeTab={onChangeTab}
          tabs={[
            {
              title: "Cargar tienda",
              content: (
                <Stores
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
              title: "Resultados parciales",
              content: (
                <Results
                  data={data}
                  onEditItemAllStores={onEditItemAllStores}
                />
              ),
            },
            {
              title: "Tops",
              content: <Tops data={data} />,
            },
          ]}
        />
      )}
    </Layout>
  );
}
