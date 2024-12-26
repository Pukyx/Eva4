'use client';
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { FaPalette, FaSprayCan, FaStar } from "react-icons/fa";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as="div">
            <Link href="/" passHref>
              BIENVENIDO
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div">
              <Link href="/Login" passHref>
                Iniciar Sesión
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="text-center" fluid style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Barra de navegación */}
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#bienvenido" style={{ color: "#e91e63" }} aria-label="Ir a Bienvenido">
                <FaPalette /> Inicio
              </Nav.Link>
              <Nav.Link href="#explicacion" style={{ color: "#e91e63" }} aria-label="Ir a Quiénes Somos">
                <FaSprayCan /> ¿Quiénes Somos?
              </Nav.Link>
              <Nav.Link href="#populares" style={{ color: "#e91e63" }} aria-label="Ir a Populares">
                <FaStar /> Populares
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Sección Bienvenida */}
        <Row id="bienvenido" className="my-5" style={{ backgroundColor: "#fce4ec", padding: "20px" }}>
          <Col>
            <h2 style={{ color: "#e91e63" }}>BIENVENIDOS A MAQUILLAJE ASIÁTICO</h2>
            <p>En esta página encontrarás las opiniones sobre los mejores maquillajes asiáticos de la web.</p>
          </Col>
        </Row>

        {/* Sección ¿Quiénes somos? */}
        <Row id="explicacion" className="my-5" style={{ backgroundColor: "#f8bbd0", padding: "20px" }}>
          <Col>
            <h2 style={{ color: "#e91e63" }}>¿QUIÉNES SOMOS?</h2>
            <p>Somos una web que busca compartir opiniones sobre los mejores maquillajes asiáticos de la web.</p>
          </Col>
        </Row>

        {/* Sección Populares */}
        <Row id="populares" className="my-5" style={{ backgroundColor: "#fce4ec", padding: "20px" }}>
          <Col>
            <h2 style={{ color: "#e91e63" }}>POPULARES</h2>
            <img src="/images/popular.jpg" alt="Populares" style={{ width: "100%", height: "auto" }} />
            <p>Estos son algunos de los maquillajes más populares de la web.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;



