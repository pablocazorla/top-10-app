import Head from "next/head";
import { Container } from "reactstrap";
import Header from "components/header";
import Footer from "components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Top 10 App - Tirada de Riesgo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header />
        <Container fluid>{children}</Container>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
