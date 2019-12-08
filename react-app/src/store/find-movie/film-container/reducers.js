import { SEARCH_CONFIRMED } from "../search-criteria/actions";

const defaultState = {
    data: []
}

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_CONFIRMED:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}