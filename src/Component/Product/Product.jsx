import React, {useState , useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

function Product() {
    const [data , setData] = useState([])
    const [filter , setFilter] = useState(data)
    const [loading , setLoading] = useState(true)
    let componentMounted = true;

    useEffect( () => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
            }

            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])
    const Loading = () => {
        return(
            <>
            {/* loading....          */}
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height='350px' />
                </div>
                <div className="col-md-3">
                    <Skeleton height='350px' />
                </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter( (x) => x.category == cat)
        setFilter(updatedList)
    }
    const Showproducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("electronics")}>Electronic</button>
            </div>
            {filter.map( (product) => {
                return(
                    <>
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src = {product.image} class="card-img-top" alt = {product.title} height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to = {`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </>
        )
    }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
            <div className="col-12 md-5">
                <h1 className='display-6 fw-bold text-center'> Latest Product</h1>
                <hr />
            </div>
        </div>
         <div className="row justify-content-center">
            {loading ? <Loading /> : <Showproducts />}
         </div>
      </div>
    </div>
  )
}

export default Product
