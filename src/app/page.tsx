'use client';

import { verificarUsuario } from "@/app/Firebase/Promesas";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Iniciando proceso de login...");
    
    try {
      const eUsuario = await verificarUsuario(username, password);

      if (eUsuario) {
        console.log("Usuario encontrado, intentando navegar...");
        router.replace('/Menu'); // Cambiamos a minúsculas y usamos replace
      } else {
        console.log("Nombre de usuario o contraseña incorrectos");
        alert("Nombre de usuario o contraseña inválidos");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Error al intentar iniciar sesión");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
            >
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

