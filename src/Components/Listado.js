import '../App.css';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import basura from '../basura.png'

const Listado = (props) => {
    return(
        <div className="Listado">
            <h4>Mi carrito</h4>
            <div className="Conteiner">
            <h4>Total:${(props.Total)}</h4>
            <img src={basura} onClick={()=>props.eliminarCarrito()} alt="logobasura"/>
            </div>
            <Table striped bordered className="Tabla">
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Importe</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.lista.map((e,index)=>
                      <tr key={index}>
                        <td>{e.cantidad}</td>
                        <td>{e.codigo}</td>
                        <td>{e.descripcion}</td>
                        <td>${e.precio}</td>
                        <td>${(e.cantidad*e.precio)}</td>
                        <td><Button onClick={()=>props.eliminarProducto(e)} variant="danger">Eliminar</Button></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
          </div>
    );
}

export default Listado;