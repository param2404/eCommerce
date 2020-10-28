import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData } from './../../actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsData())
    }, [dispatch])

    const allProducts = useSelector(state => state.ProductsReducer.allproducts)

    return (<div className="row m-0" >{allProducts ? allProducts.length && allProducts.map((product, i) => <div className="col" key={i} > <div className="card m-3" style={{ width: '15rem' }}>
        <img className="card-img-top" src={product.image ? product.image : 'http://lorempixel.com/200/200/toy'} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price : Rs{product.price}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
    </div></div>) : <div>Loading</div>}</div>
    )
}

export default Home