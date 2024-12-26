import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";

const Menu = () => {
  const router = useRouter();
  return (
    <Container
      fluid
      className="p-5"
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <Row className="justify-content-center">
        <Col md={6}>
          <ListGroup>
            {/* Registrar nueva persona */}
            <ListGroup.Item
              action
              onClick={() => router.push("/FormularioUsuario")}
              className="text-center"
            >
              <Button
                variant="danger"
                className="w-100"
                style={{ backgroundColor: "#e91e63", borderColor: "#e91e63" }}
              >
                Registrar nuevo Usuario
              </Button>
            </ListGroup.Item>

            {/* Registrar nuevo usuario */}
            <ListGroup.Item
              action
              onClick={() => router.push("/FormularioPersona")}
              className="text-center"
            >
              <Button
                variant="danger"
                className="w-100"
                style={{ backgroundColor: "#e91e63", borderColor: "#e91e63" }}
              >
                Registrar nueva Persona
              </Button>
            </ListGroup.Item>

            {/* Visualizar registros de personas */}
            <ListGroup.Item
              action
              onClick={() => router.push("/Tabla")}
              className="text-center"
            >
              <Button
                variant="danger"
                className="w-100"
                style={{ backgroundColor: "#e91e63", borderColor: "#e91e63" }}
              >
                Visualizar registros de personas
              </Button>
            </ListGroup.Item>

            {/* Salir */}
            <ListGroup.Item
              action
              onClick={() => router.push("/")}
              className="text-center"
            >
              <Button
                variant="danger"
                className="w-100"
                style={{ backgroundColor: "#e91e63", borderColor: "#e91e63" }}
              >
                Salir
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;


