import React from 'react'

const Produtos = ({producto})=>{
  //aplicamos distraction a productos
  const {nombre,id,precio} = producto

  return (
    <div>
      <h3>{nombre} </h3>
      <span>${precio}</span>
    </div>
  );
}

export default Produtos;