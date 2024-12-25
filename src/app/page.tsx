'use client';
import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { FaPalette, FaSprayCan, FaStar, FaSignInAlt } from "react-icons/fa"; // Importamos el icono de iniciar sesión

const Menu = () => {
  return (
    <>
      <Container className="text-center" fluid style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Barra de navegación */}
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#bienvenido" style={{ color: "#e91e63" }}>
                <FaPalette /> Inicio
              </Nav.Link>
              <Nav.Link href="#explicacion" style={{ color: "#e91e63" }}>
                <FaSprayCan /> ¿Quiénes Somos?
              </Nav.Link>
              <Nav.Link href="#populares" style={{ color: "#e91e63" }}>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, arcu at vulputate congue, justo purus fermentum lectus, at aliquet nunc lectus ac enim. Nullam vel neque sed felis finibus varius.
            </p>
          </Col>
        </Row>

        {/* Sección Populares */}
        <Row id="populares" className="my-5" style={{ backgroundColor: "#fce4ec", padding: "20px" }}>
          <Col>
            <h2 style={{ color: "#e91e63" }}>POPULARES</h2>
            <img src="your-image-path.jpg" alt="Populares" style={{ width: '100%', height: 'auto' }} />
            <p>Estos son algunos de los maquillajes más populares de la web.</p>
          </Col>
        </Row>

        {/* Botón para iniciar sesión */}
        <Button 
          variant="primary" 
          style={{ backgroundColor: "#e91e63", borderColor: "#e91e63", display: "inline-flex", alignItems: "center" }} 
          href="/...Login"
        >
          <FaSignInAlt style={{ marginRight: "8px" }} /> Iniciar sesión
        </Button>
      </Container>
    </>
  );
};

export default Menu;
