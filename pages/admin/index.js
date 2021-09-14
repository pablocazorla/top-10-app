import { useState, useEffect, useCallback } from "react";
import Layout from "layout";
import { storage } from "utils";
import { Input, Button } from "reactstrap";
import Tabs from "components/tabs";
import Stores from "views/stores";
import Results from "views/results";
import Tops from "views/tops";
import password from "data/password";

export default function Home() {
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

  const onAddStore = useCallback(
    (name) => {
      const newData = { ...data };
      newData.stores.push({
        name,
        items: [],
      });
      setData(newData);
      storage.set(newData);
    },
    [data]
  );

  const onDeleteStore = useCallback(
    (id) => {
      const newData = { ...data };

      newData.stores.splice(id, 1);

      setData(newData);
      storage.set(newData);
    },
    [data]
  );

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

  const onDeleteItem = useCallback(
    (storeId, itemId) => {
      const newData = { ...data };
      newData.stores[storeId].items.splice(itemId, 1);
      setData(newData);
      storage.set(newData);
    },
    [data]
  );
  const onChangeTab = useCallback(
    (tabId) => {
      const newConfig = { ...configData };
      newConfig.initialTab = tabId;
      setconfigData(newConfig);
      storage.set(newConfig, "top10app_config");
    },
    [configData]
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

  const onSetPassword = useCallback(() => {
    if (newPassword === password) {
      const newConfigData = { ...configData };
      newConfigData.password = newPassword;
      setconfigData(newConfigData);
      storage.set(newConfigData, "top10app_config");
    } else {
      seterrorNewPassword(true);
    }
  }, [configData, newPassword]);

  return (
    <Layout>
      {loadedconfigDataStored &&
        (configData.password === password ? (
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
                content: <Results data={data} />,
              },
              {
                title: "Tops",
                content: <Tops data={data} />,
              },
            ]}
          />
        ) : (
          <div className="admin-pass-box">
            <label className="text-bold">Contraseña:</label>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => {
                seterrorNewPassword(false);
                setNewPassword(e.target.value);
              }}
              className="mb-3"
            />
            {errornewPassword && (
              <div className="text-center text-danger py-2">
                Contraseña incorrecta
              </div>
            )}
            <Button color="primary" block onClick={onSetPassword}>
              Ingresar
            </Button>
          </div>
        ))}
    </Layout>
  );
}
