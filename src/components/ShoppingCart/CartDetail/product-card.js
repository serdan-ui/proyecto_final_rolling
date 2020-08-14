import React, { useState } from "react";
import { Col, Row, Container, Image, Button, Spinner } from "react-bootstrap";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./styles.css";
import axiosInstance from "../../util/axiosInstance";

const ProductCard = ({
  producto,
  carrito,
  setCarrito,
  calcularSubtotal,
  setCartValido,
  fetchCarrito,
  userId
}) => {
  const { _id, imagen, nombre, descripcion, precio } = producto.productoId;
  const { cantidadProducto } = producto;

  const [loader, setloader] = useState(false)

  //funcion para loader de productos
  const Onloader = () => {
    setloader(true)
  }
  const Offloader = () => {
    setloader(false)
  }

  const addCart = (_id) => {
    console.log("productoID" + _id)
    const usuarioID = userId;
    const productoID = _id;
    postCart({ usuarioID, productoID })


  };


  //funcion para agregar productos al carrito

  const postCart = async (contenido) => {
    const { usuarioID, productoID, cantidad } = contenido;
    Onloader()
     await axiosInstance.post("/cart", { usuarioID, productoID, cantidad })
    fetchCarrito(userId)
    Offloader()

  }




  //funcion para disminuir cantidad
  const CambiarCantidad = (_id) => {
    const cantidad = cantidadProducto - 1;

    const usuarioID = userId;
    const productoID = _id;
    postCart({ usuarioID, productoID, cantidad })
  }
  //funcion para eliminar un producto
  const EliminarProducto = (producto) => {
    Swal.fire({
      title: "Eliminar Producto?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#E74C3C",
      cancelButtonColor: "#ABB2B8",
      confirmButtonText: "Eliminar",
    }).then(async(result) => {
      if (result.value) {
        
        console.log("usuarioId" + userId)
        Onloader()
        const response = await axiosInstance.delete(`/cart/${producto._id}`, {
          data: {
            usuarioId: userId
          }
        })
        fetchCarrito(userId)
        Offloader()
      }
    });
  };

  


  return (
    <Container className="mt-2 mb-3 product-card border">
      <Row className="mt-2 mb-sm-2">
        <Col
          md="4"
          sm="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="imagen-card" src={imagen[0]} rounded fluid />
        </Col>
        <Col sm="6" md="8" className="mb-sm-1 producto-descripcion">
          <Row className="mt-2 d-flex flex-column align-items-baseline">
            <Col className="mb-2">
              <Row className="d-flex justify-content-between">
                <Col xs="6" md="8">
                  <h4>{nombre}</h4>
                </Col>
                <Col>
                {!loader ? (<Button onClick={() => EliminarProducto(producto)} className="close">
                    <FaRegTrashAlt className="trash-icono" />
                  </Button>) : (<Spinner animation="border" variant="danger" />)}
                  
                </Col>
              </Row>
            </Col>
            <Col className="mb-2 mb-md-5">
              <h6>{descripcion}</h6>
            </Col>
            <Col>
              <Row className="d-flex justify-content-between">
                <Col xs="auto" className="d-flex align-items-center">
                  <h5>{"$" + precio}</h5>
                </Col>
                <Col xs="auto" className="d-flex justify-content-center">
                  <Row className="w-100">
                    <Col className="d-flex align-items-center justify-content-center">
                      {!loader ? (<Button
                        size="sm"
                        variant="outline-info"
                        onClick={() => addCart(_id)}
                      >
                        <FaPlus />
                      </Button>) :
                        (<Button
                          disabled
                          size="sm"
                          variant="outline-info"
                          onClick={() => addCart(_id)}
                        >
                          <FaPlus />
                        </Button>)}

                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      {!loader ? (<h3>{cantidadProducto}</h3>) : <Spinner animation="border" variant="primary" />}
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      {!loader ? (<Button
                        disabled={cantidadProducto === 1}
                        size="sm"
                        variant="outline-danger"
                        onClick={() => CambiarCantidad(_id)}
                      >
                        <FaMinus />
                      </Button>) : (<Button
                        disabled
                        size="sm"
                        variant="outline-danger"
                        onClick={() => CambiarCantidad(_id)}
                      >
                        <FaMinus />
                      </Button>)}

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
