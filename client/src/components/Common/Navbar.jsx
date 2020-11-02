import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from './../../assets/logo.jpeg';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesData, clearSession } from './../../actions'

const Navbar = React.memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesData())
    }, [dispatch])

    const allCategories = useSelector(state => state.CategoriesReducer.allcategories)
    const session = useSelector(state => state.session.sessionToken)

    return (<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#F8433F' }}>
        <a className="navbar-brand" href="/" style={{
            fontSize: '40px',
            fontFamily: 'cursive',
            fontWeight: 'bold'
        }}>eCommerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {allCategories.map((category, i) =>
                    <li className="nav-item dropdown" key={i}>
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'rgba(255,255,255,1)', fontWeight: 'bold' }}>
                            {category.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {category.subCategories.map((s, i) => <Link to={`/${s.name}/${s._id}`} className="dropdown-item" key={i}>{s.name}</Link>)}
                        </div>
                    </li>)}  </ul>
            <Link to="/"><img src={logo} height='30px' alt='' /></Link>
            {session ? <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={() => dispatch(clearSession())}>Log Out</button> : <Link to="/login"><button className="btn btn-light my-2 my-sm-0" type="submit">Sign In</button></Link>}
        </div>
    </nav>)
})

export default Navbar