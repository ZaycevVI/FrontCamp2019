import { CHANGE_SORT_CRITERIA } from "./actions";
import { SEARCH_CONFIRMED } from "../search-criteria/actions";

const getCriteria = (index = 0) => {
    const criteria = [
        { id: "release_date", text: "Release Date" },
        { id: "vote_average", text: "Rating" }
    ];

    criteria[index].active = true;

    return criteria;
};

const defaultState = {
    found: 0,
    criteria: getCriteria()
}

export const sortReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_SORT_CRITERIA:
            return {
                ...state,
                criteria: getCriteria(action.payload)
            };
        case SEARCH_CONFIRMED:
            return {
                ...state,
                found: action.payload.total
            };
        default:
            return state;
    }
}