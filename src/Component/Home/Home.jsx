import React from 'react'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='hero'>
            {/* <h1>home section</h1> */}
            <div className="card bg-dark text-white border-0">
                <img src = "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=1024x1024&w=is&k=20&c=Ob0ACggwWuFDFRgIc-SM5bLWjNbIyoREeulmLN8dhLs=" className="card-img" alt="Background-image" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bold mb-0">New Session Arrivals</h5>
                        <p className="card-text lead fs-2">Check Out All The Trends</p>
                        {/* <p className="card-text">Last updated 3 mins ago</p> */}
                        </div>
                    </div>
            </div>
            <Product />
        </div>
    )
}

export default Home
