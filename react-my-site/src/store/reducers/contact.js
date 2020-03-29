import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../share/utility';

const initialState = {
    sendEmail: false
};

const startDate = (state, action) => {
    return updateObject(state, {
        startDate: state.startDate
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_DATE: return startDate(state,action);
        default: return state;
    }
};

export default reducer;