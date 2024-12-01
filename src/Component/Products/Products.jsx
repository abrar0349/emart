import React, {useState , useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';

function Products() {
    const {id} = useParams()
    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect( () => {       
    const getProducts = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
    }
    getProducts()
},[])

    const Loading = () => {
        return(
            <>
            loading....
            </>
        )
    }
    const ShowProducts = () => {
        return(
         <>
            <div className="col-md-6">
                <img src = {product.image} alt = {product.title} height={400} width={400} />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'> {product.category} </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className="leading fw-blod"> rating {product.rating && product.rating.rate}
                    <i className='fa fa-star ms-3'></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product.price}
                </h3>
                <p className="lead">
                    {product.description}
                </p>
                <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                <NavLink className="btn btn-outline-dark ms-2 px-3 py-2">Add to Cart</NavLink>
            </div>
         </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
            {
                loading ? <Loading /> : <ShowProducts />
            }
        </div>
      </div>
    </div>
  )
}

export default Products
