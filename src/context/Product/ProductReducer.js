const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_GUITARS":
            return {
                ...globalState,
                guitars: action.payload,
                guitar: [{
                    id_: "",
                    nombre: "",
                    color: "",
                    precio: "",
                    imagen: ""
                }]
            }

        case "GET_GUITAR":
            return {
                ...globalState,
                guitar: [action.payload]
            }

        default: 
            return globalState

    }


}

export default reducer