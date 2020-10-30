import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySubCategory } from '../../../actions';

const Home = (props) => {
    const dispatch = useDispatch();
    const subCategoryId = props.match.params.subcategory

    useEffect(() => {
        dispatch(getProductsBySubCategory({subCategoryId}))
    }, [dispatch, subCategoryId])

    const allProducts = useSelector(state => state.ProductsReducer.products)

    return (<div className="row m-0" >{allProducts ? allProducts.length && allProducts.map((product, i) => <div className="col" key={i} > <div className="card m-3" style={{ width: '15rem' }}>
        <img className="card-img-top" src={product.image ? product.image : 'https://img.icons8.com/plasticine/2x/product.png'} alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price : Rs{product.price}</p>
            <a href="/" className="btn btn-primary">Add to cart</a>
        </div>
    </div></div>) : <div>Loading</div>}</div>
    )
}

export default Home