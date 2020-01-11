import { CHANGE_SEARCH_CRITERIA } from "./actions";

const getCriteria = (id = "title") => {
    const criteria = [
        { id: "title", text: "Title", active: false },
        { id: "genres", text: "Genre", active: false }
    ];

    criteria.find(item => item.id === id).active = true;

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