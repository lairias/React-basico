//-------Secciones de las importaciones
import React,{Fragment} from 'react';

//-------Secciones de la funcion Declarotion principal
function Header(){
    //Lugar sefuro para codigo JS

    return(
        //todo lo que esta detro del return es lo que se vera dentro de la pantalla, antes del retunr es nuestro codigo Js
        <Fragment>
        <h1 className="encabezado" >Tienda Virual</h1>
        </Fragment>
    )
}
 export default Header; //importamos Header, que utilizaremos en app.js