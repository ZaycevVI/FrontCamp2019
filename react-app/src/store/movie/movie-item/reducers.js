import { SEARCH_MOVIE_BY_ID } from "./action";

export const filmIdReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_BY_ID:
            return {
                ...state,
                film: action.payload.film,
                films: action.payload.films
            };
        default:
            return state;
    }
}