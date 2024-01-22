
const reducers = (globalState, action) => {

    switch(action.type){

        case "LOGIN_EXITOSO":
        case "REGISTRO_EXITOSO":

        localStorage.setItem("token", action.payload.token)

            return {
                ...globalState,
                authStatus: true
            }

        case "OBTENER_USUARIO":

        return {
            ...globalState,
            authStatus: true,
            user: action.payload
        }

        case "LOGIN_ERROR":
        case "LOGOUT_USUARIO":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,

            }


        default:
            return globalState

    }

}


export default reducers