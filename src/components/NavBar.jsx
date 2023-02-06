import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg  navbar_principal">
            <div className="container-fluid">
                <div>
                    <img src="./src/images/logo.jpg" className="logo rounded-circle" alt="Logo" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
                  
                    <div className="collapse navbar-collapse acordeon " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                            </a>
                            <ul className="dropdown-menu navbar_principal ">
                            <li><a className="dropdown-item" href="#">Zarcillos</a></li>
                            <li><a className="dropdown-item" href="#">Anillos</a></li>
                            <li><a className="dropdown-item" href="#">Cinturones</a></li>
                            </ul>
                        </li>
                        
                        </ul>

                    </div>
                

            </div>
            <CartWidget/>
      </nav>


   
           

     
    );

}

export default Navbar;