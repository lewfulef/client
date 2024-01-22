import { useReducer } from "react"

import LayoutContext from "./LayoutContext"
import LayoutReducer from "./LayoutReducer"


const LayoutState = (props) => {
    
    const initialState = {
        setCheckoutOn: false,
        setMobileNavOn: false
    }


    const [globalState, dispatch] = useReducer(LayoutReducer, initialState)


    const toggleMobileSidebar = () => {

        dispatch({
            type: "SET_MOBILE_SIDEBAR"
        })

    }

    return (
        <LayoutContext.Provider
            value={{
                setCheckoutOn: globalState.setCheckoutOn,
                setMobileNavOn: globalState.setMobileNavOn,
                toggleMobileSidebar
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    )

}

export default LayoutState