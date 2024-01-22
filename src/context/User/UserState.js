import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'

import axiosClient from '../../config/axios'

const UserState = (props) => {

    const initialState = {
        user: {
            name: null,
            email: null,
        },
        authStatus: false,
        loading: true
    }


    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/usuario/crear", dataForm)

            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: res.data
            })

        } catch (error) {

            console.log(error)
            
        }
    }


    const verifyingToken = async () => {

        const token = localStorage.getItem('token')

        if(token){
            axiosClient.defaults.headers.common['x-auth-token'] = token
        } else{
            delete axiosClient.defaults.headers.common['x-auth-token']
        }

        try {

            const respuesta = await axiosClient.get("/usuario/verificar-usuario")
            
            dispatch({
                type: "OBTENER_USUARIO",
                payload: respuesta.data.user
            })

        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR"
            })
        }


    }


    const loginUser = async (dataForm) => {
        
        try {

            const respuesta = await axiosClient.post("/usuario/iniciar-sesion", dataForm)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: respuesta.data
            })

        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR"
            })
        }
    }

    const logoutUser = async () => {

        dispatch({
            type: "LOGOUT_USUARIO"
        })

    }


    const userSubmitForm = async (data) => {
        
        console.log("hola")
        const res = await axiosClient.put("/usuario/actualizar", data)

        console.log(res)

    }

    return (
        <UserContext.Provider value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            loading: globalState.loading,
            registerUser,
            verifyingToken,
            loginUser,
            logoutUser,
            userSubmitForm
        }}>

            {props.children}

        </UserContext.Provider>
    )
}

export default UserState