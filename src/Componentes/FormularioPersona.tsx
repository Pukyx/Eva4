'use client';
import { initialSatePersona, Persona } from "@/InitialStates/Persona";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const FormularioPersona = () => {
    const [persona, setPersona] = useState<Persona>(initialSatePersona);

    const handlePersona = (name: string, value: string | boolean) => {
        setPersona({ ...persona, [name]: value });
    };

    const handleRegistrar = () => {
        const { nombre, apellido, fechaNacimiento, email, contrasenia, maquillaje, genero, favorito, terminos } = persona;
      
        // Validación de campos obligatorios
        if (!nombre || !apellido || !fechaNacimiento || !email || !contrasenia || !maquillaje || !genero || !favorito || !terminos) {
          alert("Por favor, complete todos los campos obligatorios.");
          return;
        }
      
        // Registrar la persona
        registrarPersona(persona)
          .then(() => {
            alert("Registrado con éxito!");
            window.location.reload(); // Recarga la página después del registro exitoso
          })
          .catch((e) => {
            alert("Algo ocurrió");
            console.log(e);
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
                                onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.checked)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="pink" type="button" onClick={handleRegistrar} className="w-100">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default FormularioPersona;


