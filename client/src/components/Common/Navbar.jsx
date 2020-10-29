import React,{useEffect} from 'react';
import logo from './../../assets/logo.jpeg';
import { useDispatch, useSelector } from 'react-redux'
import {getCategoriesData} from './../../actions'

const Navbar = React.memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesData())
    }, [dispatch])

    const allCategories = useSelector(state => state.CategoriesReducer.allcategories)

    return (<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#F8433F' }}>
        <a className="navbar-brand" href="/"><img src={logo} height='50px' alt='' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {allCategories.map((category,i)=>
              <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {category.name}
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {category.subCategories.map((s)=><a className="dropdown-item" href="#">{s.name}</a>)}
                    </div>
                </li>)}  </ul>
            <button className="btn btn-light my-2 my-sm-0" type="submit">Sign In</button>
        </div>
    </nav>)
})

export default Navbar