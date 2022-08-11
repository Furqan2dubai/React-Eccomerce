const Single = ({e, back, add_cart, cart }) => {    
    return (
        <div className="col-12 d-flex   justify-content-center">
            
            <img src={e.thumbnail} className='col-4 p-2 '/>
            <div key={e.id} className='col-4 flex-column p-2'>
                <h1 className='title'>{e.title} </h1>
                <p className='detail'>{e.description}</p>
                <p>Stock: {e.stock}</p>
                <p>Category: {e.category}</p>
                <p>Brand: {e.brand}</p>
                <p>Rating: {e.rating}</p>
                <b>Price: {e.price}</b> 
                <div className='addtocart' onClick={()=>{ cart.filter(a => a.id==e.id).length==0 && add_cart(e)}}>
                    {cart.filter(a => a.id==e.id).length>0? 'Added' : 'Add to cart'}
                </div>
            </div>
            <a href="#" onClick={()=>{back(true)}}>Back</a>
        </div>
    ) 
  }

  export default Single;