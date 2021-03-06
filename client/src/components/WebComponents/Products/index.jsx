import React, { useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData,addToCart } from '../../../actions';
import Loader from '../../Common/Loader'

const Products =React.memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsData())
    }, [dispatch])

    const allProducts = useSelector(state => state.ProductsReducer.allproducts)
    const productLoading = useSelector(state => state.ProductsReducer.productLoading)

    const renderProducts = useCallback(() => {
        if (allProducts && allProducts.length) {
            return (
                <div className="row m-0" >{allProducts.map((product, i) => <div className="col" key={i} > <div className="card m-3" style={{ width: '15rem' }}>
                    <img className="card-img-top" src={product.image ? product.image : 'https://img.icons8.com/plasticine/2x/product.png'} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-subtitle"> Rs {product.price}</p>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary" onClick={() => dispatch(addToCart({ productId: product._id, productName:product.name, productQuantity:1,amount:product.price }))}>Add to cart</button>
                    </div>
                </div></div>
                )
                }</div>)
        } else {
            return <h3>No Products Found</h3>
        }
    }, [allProducts,dispatch])

    return (productLoading ? <Loader /> : renderProducts())
})
export default Products