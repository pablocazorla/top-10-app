import Head from "next/head";
import { Container } from "reactstrap";
import Header from "components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Top 10 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header />
        <Container fluid>INDX</Container>
      </main>
    </>
  );
}
