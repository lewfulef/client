
const reducer = (globalState, action) => {

    switch(action.type){

        case "SET_MOBILE_SIDEBAR":

            return {
                ...globalState,
                setMobileNavOn: !globalState.setMobileNavOn
            }


        default:
            return

    }

}

export default reducer