import { useState, useEffect, useCallback } from "react";
import { storage } from "utils";
import Head from "next/head";
import { Container } from "reactstrap";
import Header from "components/header";
import Tabs from "components/tabs";
import Stores from "views/stores";
// import Results from "views/results";
// import Tops from "views/tops";

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
    <>
      <Head>
        <title>Top 10 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header />
        <Container fluid>
          <Tabs
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
                  />
                ),
              },
              // {
              //   title: "Resultados parciales",
              //   content: <Results data={data} />,
              // },
              // {
              //   title: "Tops",
              //   content: <Tops data={data} />,
              // },
            ]}
          />
        </Container>
      </main>
    </>
  );
}
