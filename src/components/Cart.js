import {useState , useEffect} from 'react';
const Cart = ({remove_cart, cart}) => {   
  return(
    cart.length==0 ? <p>No Product found in the cart</p> : 
    cart.map((e)=>{
        return (
        <div className="col-9 d-flex flex-row ">
            
            <img src={e.thumbnail} className='col-9 p-2 img-thumbnail' style={{width:'100px', height :'auto'}} />
            <div key={e.id} className='col-12 flex-column p-2'>
                <b className='title'>{e.title} </b>
                <p>Price: {e.price}</p>  
                <button onClick={()=>remove_cart(e.id)}>Remove from cart</button>  
            </div> 
        </div>
        )
      }) 
      ) 
  }

  export default Cart;