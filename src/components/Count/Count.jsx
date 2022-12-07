import React, { useState } from "react";
import './css/Count.css'

const Count = () => {

  const [contador, setContador] = useState(1);

  const handlerClickRestar = () =>{ 
    if(contador < 1 ) return 
    setContador(contador - 1);
  }

  const handlerClickSumar = () => {
    setContador(contador + 1);
  };

  return (
   
<>
<div className="d-flex align-items-center">
                <i className="btn bi bi-arrow-left-square-fill fs-4 "onClick={handlerClickRestar}></i> 
                <h4 className=" mt-2 ">{contador}</h4>
                <i className="btn bi bi-arrow-right-square-fill fs-4 " onClick={handlerClickSumar}></i>               
            </div>
            </>
  );
};

export default Count