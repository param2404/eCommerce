import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData} from './../../actions';
// import connect from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsData()) 
    }, [dispatch])
    
    return (
        <div>Hello
        </div>
    )
}

export default Home