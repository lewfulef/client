import React, {useContext, useEffect, useState} from 'react'

import { Route, Redirect } from 'react-router-dom'

import UserContext from './../../context/User/UserContext'

export default function PublicRoute({ component: Component, ...props }) {

    const userCtx = useContext(UserContext)
    
    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect(async () => {

        await verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (
        <Route {...props} render={ props => {            

            if(loading) return null

            return authStatus ? 
                (<Component {...props} />)
                :
                (<Component />)
            }
        } />
    )
        
    
}
