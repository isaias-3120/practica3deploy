import '../App.css';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
    return(
        <div className="App-Productos">
        <h4>Productos</h4>
        <Table striped bordered className="Tabla">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              props.productosLista.map((e,index)=>
                <tr key={index}>
                  <td>{e.codigo}</td>
                  <td>{e.descripcion}</td>
                  <td><img src = {e.url} alt="Imagen"></img></td>
                  <td>{e.precio}</td>
                  <td><Button onClick={()=>props.agregar(e)}variant="success">Agregar</Button></td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
}

export default Productos;