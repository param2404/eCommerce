import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySubCategory } from '../../../actions';
import Loader from './../../Common/Loader'


const SubProduct = React.memo((props) => {
    const dispatch = useDispatch();
    const subCategoryId = props.match.params.subcategory

    useEffect(() => {
        dispatch(getProductsBySubCategory({ subCategoryId }))
    }, [dispatch, subCategoryId])

    const allProducts = useSelector(state => state.ProductsReducer.products)
    const productLoading = useSelector(state => state.ProductsReducer.subproductLoading)

    const renderProducts = useCallback(() => {
        if (allProducts && allProducts.length) {
            return (
                <div className="row m-0" >{allProducts.map((product, i) => <div className="col" key={i} > <div className="card m-3" style={{ width: '15rem' }}>
                    <img className="card-img-top" src={product.image ? product.image : 'https://img.icons8.com/plasticine/2x/product.png'} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Price : Rs{product.price}</p>
                        <p className="card-text">Quantity</p>
                        <a href="/" className="btn btn-primary">Add to cart</a>
                    </div>
                </div></div>
                )
                }</div>)
        } else {
           return <h3>No Products Found</h3>
        }
    },[allProducts])

    return (productLoading ? <Loader /> : renderProducts())
})
export default SubProduct