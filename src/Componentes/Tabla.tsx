import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { Persona } from "@/Interfaces/Interfaces";


export const Tabla = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    useEffect(() => {
      obtenerPersonas()
        .then((personas) => {
          console.log(personas);
          setSocios(personas);
        })
        .catch((e) => {
          alert("No se logran cargar los datos");
          console.log(e);
        });
    }, []);
  
    const [showModal, setShowModal] = useState(false);
    const [keyToDelete, setKeyToDelete] = useState<string | null>(null);
  
    // Mostrar modal y guardar clave del registro a eliminar
    const handleEliminar = (key: string) => {
      setKeyToDelete(key);
      setShowModal(true);
    };
  
    // Confirmar la eliminación del registro
    const confirmarEliminacion = async () => {
      if (keyToDelete) {
        try {
          await eliminarPersona(keyToDelete); // Elimina el socio
        } catch (error) {
          console.error("Error al eliminar el socio: ", error);
          alert("No se pudo eliminar el socio");
        } finally {
          setShowModal(false);
          setKeyToDelete(null);
          window.location.reload();
        }
      }
    };
  
    // Cancelar la eliminación y ocultar el modal
    const cancelarEliminacion = () => {
      setShowModal(false);
      setKeyToDelete(null);
  };

  return (
        <>
          <Container>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Fecha Nacimiento</th>
                      <th>Género</th>
                      <th>Maquillaje favorito</th>
                      <th>Opinión</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personas.map((p) => (
                      <tr>
                        <td>{p.nombre}</td>
                        <td>{p.apellido}</td>
                        <td>{p.email}</td>
                        <td>{p.fechaNacimiento}</td>
                        <td>{p.genero}</td>
                        <td>{p.favorito}</td>
                        <td>
                          <Link
                            href={{
                              pathname: "/Editar",
                              query: { key: p.key },
                            }}
                          >
                            <Button variant="warning">
                              <FaEdit />
                            </Button>
                          </Link>
                          <Button
                            variant="danger"
                            onClick={() => handleEliminar(p.key || "")}
                          >
                            <MdDelete />
                          </Button>
                          {/* Modal */}
                          <Modal show={showModal} onHide={cancelarEliminacion}>
                            <Modal.Header closeButton>
                              <Modal.Title>Confirmar Eliminación</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              ¿Estás seguro de que deseas eliminar a {p.nombre} {p.apellido}?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={cancelarEliminacion}>
                                Cancelar
                              </Button>
                              <Button variant="primary" onClick={confirmarEliminacion}>
                                Confirmar
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </>
      );
    };
    
    export default Tabla;
   
