const initialState = {
    b: 1
}

const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_B') {
        return {
            ...state,
            b: action.a + state.b
        }
    }
    return state;
}

export default reducer;