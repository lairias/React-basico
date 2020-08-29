//-------Secciones de las importaciones
import React,{Fragment} from 'react';

//-------Secciones de la funcion Declarotion principal
//pasamos variable por la funcion la cual se llaman props
function Header({titulo}){
    
    //Lugar sefuro para codigo JS

    return(
        //todo lo que esta detro del return es lo que se vera dentro de la pantalla, antes del retunr es nuestro codigo Js
        <Fragment>
        <h1 className="encabezado" >{titulo}</h1>
        </Fragment>
    )
}
 export default Header; //importamos Header, que utilizaremos en app.js