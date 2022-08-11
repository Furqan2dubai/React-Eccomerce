 
import {useState , useEffect} from 'react';
const Post = ({p, product_id, add_cart, cart}) => {   
  return(
    p.map((e)=>{
        return (
          <div key={e.id} className='col-12 col-md-4 d-flex p-2 flex-column justify-content-center'>
            <h2 className='title' onClick={()=>product_id(e.id)}>{e.title} </h2>
            <p className='detail'>{e.description}</p>
            <p>Rating: {e.rating}</p>
            <b>Price: {e.price}</b> 
            <div className='addtocart' onClick={()=>{ cart.filter(a => a.id==e.id).length==0 && add_cart(e)}}>
              {cart.filter(a => a.id==e.id).length>0? 'Added' : 'Add to cart'}
            </div>
        </div>
        )
      }) 
      ) 
  }

  export default Post;