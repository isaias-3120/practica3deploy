import './App.css';
import Header from './Components/Header';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './Components/Productos';
import Listado from './Components/Listado';
//import Listado from './Components/Listado';



class App extends Component{
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
      ],
    };
  }

  agregarProducto=(prod)=>{
    let buscado = this.state.carrito.find(e=>e.codigo===prod.codigo)
    let producto_temp
    let temporal_borra = this.state.carrito
    //console.log(buscado)
    if (buscado !== undefined){
      console.log("entro");
      producto_temp={
        cantidad: buscado.cantidad + 1,
        codigo:prod.codigo,
        descripcion:prod.descripcion,
        precio:prod.precio
      }
      temporal_borra = this.state.carrito.filter((e)=>e.codigo!==prod.codigo)
      alert("agrego unidad ")
    }
    else{
      console.log("entro2");
      producto_temp={
        cantidad:1,
        codigo:prod.codigo,
        descripcion:prod.descripcion,
        precio:prod.precio
      }
      alert("agrego nuevo")
    }
  
    this.setState({
      carrito:[...temporal_borra, producto_temp],
      total: this.state.total + prod.precio
    });
  }

  eliminarProducto=(cod)=>{
    let buscado = this.state.carrito.find(e=>e.codigo===cod.codigo)
    let producto_temp
    let temporal_borra = this.state.carrito
    if(buscado.cantidad>1){
      producto_temp={
        cantidad: buscado.cantidad - 1,
        codigo:cod.codigo,
        descripcion:cod.descripcion,
        precio:cod.precio
      }
      temporal_borra = this.state.carrito.filter((e)=>e.codigo!==cod.codigo)
      this.setState({
        carrito:[producto_temp,...temporal_borra],
        total: this.state.total - cod.precio
      });
      alert("Borrando unidad")
    }
    else{
      temporal_borra = this.state.carrito.filter((e)=>e.codigo!==cod.codigo)
      this.setState({
        carrito:[...temporal_borra],
        total: this.state.total - cod.precio
      });
      alert("Ultimo borrado")
    }
    //el this setState estaba afuera pero no jalaba
    //AYUDAAAAA
    //de la forma normal, se hizo de forma bruta


  }

  eliminarCarrito=()=>{
    if (this.state.total === 0){
      alert("nada que borrar")
    }
    else{
      alert("borrando todo")
      this.setState({
        carrito:[],
        total: 0
      });
    }

  }  

  render(){
    this.state.carrito.sort((a,b)=>a.codigo-b.codigo)
    return (
      <div className="App">
        <Header />    
        <div className="Containers">
          <Productos
            productosLista = {this.state.productosLista}
            agregar = {this.agregarProducto}
          />
          <Listado
            lista={this.state.carrito}
            Total={this.state.total}
            eliminarProducto={this.eliminarProducto}
            eliminarCarrito={this.eliminarCarrito}
          />
        </div>
      </div>
    );
  }
}
export default App;
/*
Librerias instaladas:
npm install react-bootstrap bootstrap
npm install --save prop-types
npm install --save gh-pages

Para eliminar el .git 
rm -rf .git
*/