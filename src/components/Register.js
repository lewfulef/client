import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../context/User/UserContext'

import Logo from "./../assets/logotitle.png"

export default function Register() {

  const userCtx = useContext(UserContext)

  const { 
      registerUser 
  } = userCtx

  const [data, setData] = useState({
      username: "",
      email: "",
      password: ""
  })

  
  const handleChange = (event) => {

      event.preventDefault()

      setData({
          ...data,
          [event.target.name]: event.target.value
      })
  }

  const sendData = (event) => {
      event.preventDefault()
      registerUser(data)
  }



    return (
      <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta? &nbsp;
          <Link to="/ladonagatona/iniciar-sesion">
            <a className="font-medium text-yellow-500 hover:text-yellow-300">
              Inicia sesión.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={(e) => { sendData(e) }} className="space-y-6">

          <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Tu nombre completo
              </label>
              <div className="mt-1">
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  onChange={(e) => { handleChange(e) }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Tu correo electrónico
              </label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  onChange={(e) => { handleChange(e) }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Tu contraseña
              </label>
              <div className="mt-1">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  onChange={(e) => { handleChange(e) }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Confirma tu contraseña
              </label>
              <div className="mt-1">
                <input 
                id="confirm-password" 
                name="confirm-password" 
                type="password" 
                required 
                onChange={(e) => { handleChange(e) }}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Acceder a tu cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    )
}
