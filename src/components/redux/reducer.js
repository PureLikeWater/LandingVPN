const CHANGE_PARAMS = "CHANGE_PARAMS"










const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PARAMS: {
            return {
                ...state, 
            }
        }
        default: return state;
    }
}

export const changeParams = (params) => {
    return {
        type: CHANGE_PARAMS,
        params
    }
}

export default reducer;