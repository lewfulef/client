import { useReducer } from 'react'

import axiosClient from "./../../config/axios"

import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"

const ProductState = (props) => {

    const initialState = {
        guitars: [],
        guitar: [{
            id_: "",
            nombre: "",
            color: "",
            precio: "",
            imagen: ""
        }]
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getGuitar = async (id) => {

        const res = await axiosClient.get(`/obtener-guitarra/${id}`)

        const guitar = res.data.guitar

        dispatch({
            type: "GET_GUITAR",
            payload: guitar
        })

        return guitar

    }


    const getGuitars = async () => {

        const res = await axiosClient.get("/obtener-guitarras")

        dispatch({
            type: "GET_GUITARS",
            payload: res.data.guitarras
        })

    }

    const getPreferenceCheckoutMP = async (dataform) => {

        console.log("dataform:", dataform)

        const res = await axiosClient.post("/mercadopago", dataform)

        return res.data.checkoutId

    }


    return (
        <ProductContext.Provider
            value={{
                guitars: globalState.guitars,
                guitar: globalState.guitar,
                getGuitar,
                getGuitars,
                getPreferenceCheckoutMP       
            }}
        >
            { props.children }
        </ProductContext.Provider>
    )

}


export default ProductState