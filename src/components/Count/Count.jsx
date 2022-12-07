import React, { useState } from "react";

const Count = () => {

  const [contador, setContador] = useState(1);

  const handlerClickRestar = () =>{ 
    if(contador < 2 ) return 
    setContador(contador - 1);
  }

  const handlerClickSumar = () => {
    setContador(contador + 1);
  };

  return (
   
<>
<div className="d-flex align-items-center">
                <i className="btn bi bi-arrow-left-square-fill text-danger fs-3 "onClick={handlerClickRestar}></i> 
                <h3 className=" mt-2 ">{contador}</h3>
                <i className="btn bi bi-arrow-right-square-fill text-danger fs-3 " onClick={handlerClickSumar}></i>               
            </div>
            </>
  );
};

export default Count