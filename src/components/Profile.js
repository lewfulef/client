import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'

export default function Profile() {

    const ctx = useContext(UserContext)

    const { userSubmitForm } = ctx

    const {
        name,
        email,
        lastname,
        country,
        address,
        city,
        state,
        zipcode
    } = ctx.user

    const [userForm, setUserForm] = useState({
        name: "",
        lastname: "",
        country: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        email
    })

    let countries = [
        "-----",
        "México",
        "Colombia",
        "Perú",
        "Chile",
        "Otro país..."
    ]

    const handleChange = async (event) => {

        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        })

    }

    const sendData = (event) => {

        event.preventDefault()

        userSubmitForm(userForm)

    }

    useEffect(() => {

        const updateData = () => {

            return setUserForm({
                ...userForm,
                name,
                lastname,
                country,
                address,
                city,
                state,
                zipcode
            })

        }

        updateData()

    }, [])


    return (
        <main className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="h-1/2 bg-gray-100"></div>
                    <div>
                        <form className="space-y-8" onSubmit={(e) => sendData(e)}>
                            <div className="space-y-8">

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Tu información personal
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            (Recuerda que es un app con objetivos de aprendizaje. Introduce datos no reales 😉)
                                        </p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">
                                                Tu nombre
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    name="name"
                                                    value={userForm.name}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">
                                                Tus apellidos
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    name="lastname"
                                                    value={userForm.lastname}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label for="email" className="block text-sm font-medium text-gray-700">
                                                Tu correo
                                            </label>
                                            <div className="mt-1">
                                                <input id="email"
                                                    disabled name="email"
                                                    type="email"
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleChange(e) }}
                                                    name="email"
                                                    value={userForm.email}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label for="country" className="block text-sm font-medium text-gray-700">
                                                Tu país
                                            </label>

                                            <div className="mt-1">
                                                <select id="country" name="country" autocomplete="country" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleChange(e) }}
                                                >

                                                    {
                                                        countries.map(e => {
                                                            return e === country ?
                                                                (
                                                                    <>
                                                                        <option
                                                                            value={e}
                                                                            selected
                                                                            value={e}>{e}
                                                                        </option>
                                                                    </>
                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        <option
                                                                            value={userForm.country}
                                                                            onChange={(e) => { handleChange(e) }}
                                                                            value={e}>{e}</option>
                                                                    </>
                                                                )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>


                                        <div className="sm:col-span-6">
                                            <label for="street-address" className="block text-sm font-medium text-gray-700">
                                                Dirección física (Incluye observaciones de ubicación)
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    type="text"
                                                    name="address"
                                                    value={userForm.address}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="city" className="block text-sm font-medium text-gray-700">
                                                Ciudad
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={userForm.city}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="state" className="block text-sm font-medium text-gray-700">
                                                Estado / Provincia
                                            </label>
                                            <div className="mt-1">
                                                <input type="text"
                                                    name="state"
                                                    value={userForm.state}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border text-sm border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="state" className="block text-sm font-medium text-gray-700">
                                                Código Postal
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="zipcode"
                                                    value={userForm.zipcode}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border text-sm border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <div className="flex justify-start">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Guardar cambios
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}
