import React, { useState } from "react";



const ItemCount = ({}) => {
    const [counter, setCounter] = useState(0);

   

  return (
    <>
      <div className="d-flex flex column">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-contador" onClick= {()=>setCounter(counter-1)}>-</button>
        <button type="button" class="btn btn-light">{counter}</button>
        <button type="button" class="btn btn-contador" onClick= {()=>setCounter(counter+1)}>+</button>
        </div>
      </div>
    </>
  )
}

export default ItemCount;
