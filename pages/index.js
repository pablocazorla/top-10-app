import { useState, useEffect, useCallback } from "react";
import Layout from "layout";
import { storage } from "utils";
import Tabs from "components/tabs";
import Stores from "views/stores";

export default function Home() {
  const [data, setData] = useState({
    stores: [],
  });

  const [loadedStored, setLoadedStored] = useState(false);

  const dataStored = storage.get();

  useEffect(() => {
    if (dataStored && !loadedStored) {
      if (dataStored !== "none") {
        setData(dataStored);
        setLoadedStored(true);
      } else {
        // storage.set({
        //   stores: [],
        // });
        storage.set({
          stores: [
            {
              name: "Invictvs",
              items: [
                {
                  name: "La Tripulación",
                  editorial: "Devir",
                  price: 3300,
                  count: 6,
                },
                {
                  name: "Catán",
                  editorial: "Devir",
                  price: 7000,
                  count: 24,
                },
              ],
            },
          ],
        });
        setLoadedStored(true);
      }
    }
  }, [dataStored, loadedStored]);

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

  return (
    <Layout>
      <Tabs
        tabs={[
          {
            title: "Cargar tienda",
            content: (
              <Stores
                isAdmin={false}
                data={data}
                onAddStore={onAddStore}
                onDeleteStore={onDeleteStore}
                onAddItem={onAddItem}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
              />
            ),
          },
        ]}
      />
    </Layout>
  );
}
