
  import {useState , useEffect} from 'react';
  const Header = ({current_page, cart_length, active_page}) => {    
    return(
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="#" onClick={()=>current_page('shop')} className="me-auto d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <b title="Develop By Furqan Hussain">Rymera Shop</b>
                    </a> 
                    <ul className="nav ">
                    <li className={"nav-item "+(active_page=='shop' ? 'active' : '') } onClick={()=>current_page('shop')} ><a href="#" className="nav-link link-dark px-2">Shop</a></li>
                    <li className={"nav-item "+(active_page=='cart' ? 'active':'') } onClick={()=>current_page('cart')}><a href="#" className="nav-link link-dark px-2">Cart <sup>{cart_length} items</sup> </a></li>
                    </ul>
                    
                </div>
            </div>
        </header>
        ) 
    }
  
    export default Header;