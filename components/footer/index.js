import { Container } from "reactstrap";
const d = new Date();
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <div className="footer-content">
          &copy; Copyright {d.getFullYear()} - Tirada de Riesgo.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
