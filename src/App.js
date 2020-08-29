/*Cuando Creamos una app de React App contiene muchos archivos de configuracion pre instalados, como ser Babel,  Webpack configurados y algunos archivos de Js, html y css.

dentro del la carpeta public encontramos un archivo html el cual contiene las etiquetas html y dentro se encuentra un div
con la id de root, que hace referencia un un elemento que selecionaremos con getElementBy en index,js donde inyectaremos todos los comandos de nuestro codigo
*/
//Importamos react, ya que contiene todos los componetes que la app acupa para funcionar

//------------Importaciones
import React,{Fragment, useState} from 'react';
//------Importaciones de Compones
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.js'
import Productos from './Components/Productos.jsx'

//creamos una funcion 
function App() {
//Espacio recomendado para nuestro codigo de JS

//Siempre returnamos algo dento un elemento qu encierre todo  como un div  div o un Fragment 

//creando lista de productos
const [productos, setProdutos] = useState([
  { id: 1, nombre:"camisa JS",precio: 50 },
  { id: 2, nombre:"camisa React",precio: 40 },
  { id: 3, nombre:"camisa VueJS",precio: 30 },
  { id: 4, nombre:"camisa Angular",precio: 20 },
  { id: 5, nombre:"camisa Node",precio: 10 },
])

//ennviaremos la el año al footer como variobale
const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        //pasaremos variables a la pagina del Header
        titulo={"Tienda Virtual"}
      />
      <h1>Lista de Productos</h1>
      
      {productos.map((producto) => (
        <Productos 
        key={producto.id}
        producto={producto}
         />
      ))}
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App; //expotamos esa funcion,para que funciones en cuarquier parte de nuestro codigo cuando la acupemos
