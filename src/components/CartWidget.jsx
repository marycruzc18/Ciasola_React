import React from 'react';

const CartWidget = () => {
    return(
                  <button type="button" class="btn btn_principal_2">
                    <i className="bi bi-cart mx-5  carrito" data-bs-toggle="modal"  data-bs-target="#modal" id="carritoContenedor" ></i><span className="numero">2</span>
                  </button>
        

    
    );

}

export default CartWidget;