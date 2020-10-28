import React from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'

export function ProtectedRoute() {

    const Component = props.component;
    const token = useSelector(state => state.session.sessionToken)
    const isAuthenticated = token

    return isAuthenticated ? (
        <Component />
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}
