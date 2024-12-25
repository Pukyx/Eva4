'use client';
import { initialStatePersona } from "@/InitialStates/Persona";
import { modificarPersona, obtenerPersona } from "@/app/Firebase/Promesas";
import { Persona } from "@/Interfaces/Interfaces";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const Editar = () => {
  const [persona, setPersona] = useState<Persona>(initialStatePersona);
  
  const handlePersona = (name: string, value: string) => {
    setPersona({ ...persona, [name]: value });
  };

  const router = useRouter();
  
  useEffect(() => {
    const key = router.query.key;
    if (typeof key === "string") {
      obtenerPersona(key).then((p) => {
        if (p != undefined) {
          setPersona(p);
        } else {
          router.push("/Componentes/Tabla");
        }
      });
    } else {
      router.push("/Componentes/Tabla");
    }
  }, []);

  const handleModificar = () => {
    modificarPersona(persona)
      .then(() => {
        alert("Se modificó con éxito");
        router.push("/Componentes/Tabla");
      })
      .catch((e) => {
        console.log(e);
        alert("Algo ocurrió");
      });
  };

      return (
          <Container className="bg-white p-4">
              <h2 className="text-center text-primary my-4">Formulario de Persona</h2>
              <Form>
                  <Row className="mb-3">
                      <Col md={6}>
                          <Form.Group controlId="formNombre">
                              <Form.Label>Nombre*</Form.Label>
                              <Form.Control
                                  type="text"
                                  name="nombre"
                                  placeholder="Ingrese su nombre"
                                  value={persona.nombre}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                      <Col md={6}>
                          <Form.Group controlId="formApellido">
                              <Form.Label>Apellido*</Form.Label>
                              <Form.Control
                                  type="text"
                                  name="apellido"
                                  placeholder="Ingrese su apellido"
                                  value={persona.apellido}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                  </Row>
  
                  <Row className="mb-3">
                      <Col md={6}>
                          <Form.Group controlId="formCorreo">
                              <Form.Label>Correo*</Form.Label>
                              <Form.Control
                                  type="email"
                                  name="email"
                                  placeholder="Ingresa tu correo"
                                  value={persona.email}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                      <Col md={6}>
                          <Form.Group controlId="formFecha">
                              <Form.Label>Fecha de nacimiento</Form.Label>
                              <Form.Control
                                  type="date"
                                  name="fechaNacimiento"
                                  value={persona.fechaNacimiento}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                  </Row>
  
                  <Row className="mb-3">
                      <Col md={6}>
                          <Form.Group controlId="formGenero">
                              <Form.Label>Género</Form.Label>
                              <Form.Control
                                  as="select"
                                  name="genero"
                                  value={persona.genero}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              >
                                  <option value="">Seleccione...</option>
                                  <option value="Masculino">Masculino</option>
                                  <option value="Femenino">Femenino</option>
                                  <option value="No especifica">No especifica</option>
                              </Form.Control>
                          </Form.Group>
                      </Col>
                      <Col md={6}>
                          <Form.Group controlId="formFavorito">
                              <Form.Label>Maquillaje favorito</Form.Label>
                              <Form.Control
                                  as="select"
                                  name="maquillaje"
                                  value={persona.maquillaje}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              >
                                  <option value="">Seleccione...</option>
                                  <option value="Máscara de pestañas">Máscara de pestañas</option>
                                  <option value="Tinta de labios">Tinta de labios</option>
                                  <option value="Sombras de ojos">Sombras de ojos</option>
                                  <option value="Otro">Otro</option>
                              </Form.Control>
                          </Form.Group>
                      </Col>
                  </Row>
  
                  <Row className="mb-3">
                      <Col md={12}>
                          <Form.Group controlId="formOpinion">
                              <Form.Label>Opinión</Form.Label>
                              <Form.Control
                                  as="textarea"
                                  name="favorito"
                                  placeholder="Cuéntanos sobre tus productos de maquillaje asiático favoritos"
                                  value={persona.favorito}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                  </Row>
  
                  <Row className="mb-3">
                      <Col md={12}>
                          <Form.Group controlId="formTerminos">
                              <Form.Check
                                  type="checkbox"
                                  name="terminos"
                                  label="Acepta los términos y condiciones*"
                                  checked={persona.terminos}
                                  onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                              />
                          </Form.Group>
                      </Col>
                  </Row>
  
                  <Button variant="pink" type="button" onClick={handleModificar} className="w-100">
                      Modificar
                  </Button>
              </Form>
          </Container>
      );
  };
  
  export default Editar;

  