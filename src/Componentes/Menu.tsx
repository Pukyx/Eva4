import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaTag, FaEye, FaSignOutAlt } from 'react-icons/fa';

const Menu = () => {
  return (
    <Container fluid style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#ff69b4', textAlign: 'center', marginBottom: '30px' }}>Menú Principal</h2>

      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Button href="#registrarUsuario" variant="light" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '2px solid #ff69b4', color: '#000' }}>
            <FaUserPlus style={{ marginRight: '10px' }} /> Registrar nuevo usuario
          </Button>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Button href="#registroTematica" variant="light" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '2px solid #ff69b4', color: '#000' }}>
            <FaTag style={{ marginRight: '10px' }} /> Registro según temática
          </Button>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Button href="#visualizarRegistros" variant="light" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '2px solid #ff69b4', color: '#000' }}>
            <FaEye style={{ marginRight: '10px' }} /> Visualizar lo registrado
          </Button>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Button href="#salir" variant="light" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '2px solid #ff69b4', color: '#000' }}>
            <FaSignOutAlt style={{ marginRight: '10px' }} /> Salir
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;

