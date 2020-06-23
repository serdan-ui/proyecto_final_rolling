import React from 'react';
import {Table} from 'react-bootstrap'

const Usuarios = () => {
  return( <>
  <h3 className="text-center text-white">Usuarios Registrados</h3>
  <Table striped bordered hover responsive="sm" variant="dark" >
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Turno</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</>
  )
}
export default Usuarios;