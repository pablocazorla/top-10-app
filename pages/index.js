import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { Container } from "reactstrap";
import Header from "components/header";
import Tabs from "components/tabs";
import Tiendas from "views/tiendas";
import Resultados from "views/resultados";
import Tops from "views/tops";
import { storage } from "utils";

export default function Home() {
  const [data, setData] = useState({
    games: [],
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
        //   shops: [],
        // });
        storage.set({
          games: [
            {
              name: "La Tripulación",
              editorial: "Devir",
              price: "baratos",
              tiendas: [
                {
                  name: "La Mesa Rectangular",
                  count: 6,
                },
                {
                  name: "Invictvs",
                  count: 13,
                },
              ],
            },
            {
              name: "Catán",
              editorial: "Devir",
              price: "caros",
              tiendas: [
                {
                  name: "La Mesa Rectangular",
                  count: 2,
                },
                {
                  name: "Tienda Lúdica",
                  count: 12,
                },
              ],
            },
          ],
        });
        setLoadedStored(true);
      }
    }
  }, [dataStored, loadedStored]);

  //const addShop = useCallback(() => {});

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
                content: <Tiendas data={data} />,
              },
              {
                title: "Resultados parciales",
                content: <Resultados data={data} />,
              },
              {
                title: "Tops",
                content: <Tops data={data} />,
              },
            ]}
          />
        </Container>
      </main>
    </>
  );
}
