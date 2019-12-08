import { CHANGE_SEARCH_CRITERIA } from "./actions";

const getCriteria = (index = 0) => {
    const criteria = [
        { id: "title", text: "Title" },
        { id: "genre", text: "Genre" }
    ];

    criteria[index].active = true;

    return criteria;
};

const defaultState = {
    value: '',
    criteria: getCriteria()
}

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_CRITERIA:
            return {
                ...state,
                criteria: getCriteria(action.payload)
            }
        default:
            return state;
    }
}