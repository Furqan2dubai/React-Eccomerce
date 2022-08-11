import {useState , useEffect} from 'react';
import Header from './components/Header.js';
import Post from './components/Post.js';
import Single from './components/Single.js';
import Cart from './components/Cart.js';
import Loading from './components/loading.js' ;
import './App.css';
function App() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([1,2,3]);
  const [product, setProduct] = useState({});
  const [p_id, set_p_id] = useState('');
  const [cart, setCart] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [page, setPage] = useState('shop');
  const getPost = async() => {
    try{ 
      const data = await fetch('https://dummyjson.com/products/'+p_id) ;
      var prod = await data.json(); 
      if(p_id==''){
        setProducts(prod.products);  
        setBreadcrumb(['Shop']);
      }
      else{
        setProduct(prod);   
        setBreadcrumb(['Shop', prod.title]);
      } 
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(true);

    }
  } 

  useEffect(()=>{
    getPost(); 
  }, [ p_id]) ;

  if(loading){
    return(<Loading/>)
  }
  return (
    <div>
        <Header current_page={ p => {setPage(p);setBreadcrumb([p])} } active_page={page} cart_length={cart.length} />
        <div className="container"> 
            <div className='row d-flex'> 
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" onClick={()=>set_p_id('')}>Home</a></li>
                { breadcrumb.map(p => <li class="breadcrumb-item " aria-current="page">{p}</li> )}
                
              </ol>
            </nav>
            {
              page=='cart' ? 
                <Cart remove_cart={e => setCart( cart.filter(c=>c.id!=e) ) } cart={cart} /> :
              ((p_id=='' &&  page!='cart') ? 
              <Post p={products} product_id={(id)=> set_p_id(id)} add_cart={e => setCart([...cart,e]) } cart={cart} />  : 
              <Single e ={product} back={(back)=> set_p_id('')}  cart={cart} add_cart={e => setCart([...cart,e]) } /> )
            }
    
            </div>
        </div>
    </div>
  );
}

export default App;
 