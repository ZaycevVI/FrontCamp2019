import { SEARCH_CONFIRMED } from "../search-criteria/actions";
import { CHANGE_SORT_CRITERIA } from "../sort-criteria/actions"

const sortDesc = (film1, film2, key) => {
    if (film1[key] > film2[key])
        return -1;
    else if (film1[key] < film2[key])
        return 1;

    return 0;
}

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
        case CHANGE_SORT_CRITERIA:
            return {
                ...state,
                data: state.data.sort((i1, i2) => sortDesc(i1, i2, action.payload))
            };
        default:
            return state;
    }
}

